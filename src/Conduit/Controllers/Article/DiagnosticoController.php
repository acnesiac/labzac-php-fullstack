<?php

namespace Conduit\Controllers\Article;

use Conduit\Models\Article;
use Conduit\Models\Diagnostico;
use Conduit\Models\Tag;
use Conduit\Transformers\DiagnosticoTransformer;
use Interop\Container\ContainerInterface;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use Slim\Http\Request;
use Slim\Http\Response;
use Respect\Validation\Validator as v;
class DiagnosticoController
{

    /** @var \Conduit\Validation\Validator */
    protected $validator;
    /** @var \Illuminate\Database\Capsule\Manager */
    protected $db;
    /** @var \Conduit\Services\Auth\Auth */
    protected $auth;
    /** @var \League\Fractal\Manager */
    protected $fractal;

    /**
     * UserController constructor.
     *
     * @param \Interop\Container\ContainerInterface $container
     *
     * @internal param $auth
     */
    public function __construct(ContainerInterface $container)
    {
        $this->auth = $container->get('auth');
        $this->fractal = $container->get('fractal');
        $this->validator = $container->get('validator');
        $this->db = $container->get('db');
    }

    /**
     * Return List of Diagnosticos
     *
     * @param \Slim\Http\Request  $request
     * @param \Slim\Http\Response $response
     * @param array               $args
     *
     * @return \Slim\Http\Response
     */
    public function index(Request $request, Response $response, array $args)
    {
        // TODO Extract the logic of filtering diagnosticos to its own class

        $requestUserId = optional($requestUser = $this->auth->requestUser($request))->id;
        $builder = Diagnostico::query()->latest()->with(['tags', 'user'])->limit(20);

        if ($request->getUri()->getPath() == '/api/diagnosticos/feed') {
            if (is_null($requestUser)) {
                return $response->withJson([], 401);
            }
            $ids = $requestUser->followings->pluck('id');
            $builder->whereIn('user_id', $ids);
        }

        if ($author = $request->getParam('author')) {
            $builder->whereHas('user', function ($query) use ($author) {
                $query->where('username', $author);
            });
        }

        if ($tag = $request->getParam('tag')) {
            $builder->whereHas('tags', function ($query) use ($tag) {
                $query->where('title', $tag);
            });
        }

        if ($favoriteByUser = $request->getParam('favorited')) {
            $builder->whereHas('favorites', function ($query) use ($favoriteByUser) {
                $query->where('username', $favoriteByUser);
            });
        }

        if ($limit = $request->getParam('limit')) {
            $builder->limit($limit);
        }

        if ($offset = $request->getParam('offset')) {
            $builder->offset($offset);
        }

        $articlesCount = $builder->count();
        $articles = $builder->get();

        $data = $this->fractal->createData(new Collection($articles,
            new DiagnosticoTransformer($requestUserId)))->toArray();

        return $response->withJson(['diagnosticos' => $data['data'], 'count' => $articlesCount])
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }

    /**
     * Return a single Article to get article endpoint
     *
     * @param \Slim\Http\Request  $request
     * @param \Slim\Http\Response $response
     * @param array               $args
     *
     * @return \Slim\Http\Response
     */
    public function show(Request $request, Response $response, array $args)
    {
        $requestUserId = optional($this->auth->requestUser($request))->id;

        $article = Diagnostico::query()->where('id', $args['id'])->firstOrFail();

        $data = $this->fractal->createData(new Item($article, new DiagnosticoTransformer($requestUserId)))->toArray();

        return $response->withJson(['diagnostico' => $data])
			->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }

    /**
     * Create and store a new Diagnostico
     *
     * @param \Slim\Http\Request  $request
     * @param \Slim\Http\Response $response
     *
     * @return Response
     */
    public function store(Request $request, Response $response)
    {
        $requestUser = $this->auth->requestUser($request);

        if (is_null($requestUser)) {
            return $response->withJson([], 401);
        }

        $this->validator->validateArray($data = $request->getParam('diagnostico'),
            [
                'title'       => v::notEmpty(),
                'description' => v::notEmpty(),
                'body'        => v::notEmpty(),
            ]);

        if ($this->validator->failed()) {
            return $response->withJson(['errors' => $this->validator->getErrors()], 422);
        }

        $diagnostico = new Diagnostico($request->getParam('diagnostico'));
        $diagnostico->user_id = $requestUser->id;
        $diagnostico->save();

        $tagsId = [];
        if (isset($data['tagList'])) {
            foreach ($data['tagList'] as $tag) {
                $tagsId[] = Tag::updateOrCreate(['title' => $tag], ['title' => $tag])->id;
            }
            $diagnostico->tags()->sync($tagsId);
        }

        $data = $this->fractal->createData(new Item($diagnostico, new DiagnosticoTransformer()))->toArray();

        return $response->withJson(['diagnostico' => $data])
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    }

}
