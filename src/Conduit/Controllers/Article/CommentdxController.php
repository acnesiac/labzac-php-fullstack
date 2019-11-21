<?php

namespace Conduit\Controllers\Article;

use Conduit\Models\Article;
use Conduit\Models\Diagnostico;
use Conduit\Models\Commentdx;
use Conduit\Transformers\ArticleTransformer;
use Conduit\Transformers\CommentdxTransformer;
use Interop\Container\ContainerInterface;
use League\Fractal\Resource\Collection;
use League\Fractal\Resource\Item;
use Slim\Http\Request;
use Slim\Http\Response;
use Respect\Validation\Validator as v;

class CommentDXController
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
     * Return a all DxComment for an article
     *
     * @param \Slim\Http\Request  $request
     * @param \Slim\Http\Response $response
     * @param array               $args
     *
     * @return \Slim\Http\Response
     */
    public function index(Request $request, Response $response, array $args)
    {
        $requestUserId = optional($this->auth->requestUser($request))->id;

        $diagnostico = Diagnostico::query()->with('comments')->where('id', $args['diagnostico'])->firstOrFail();

         $data = $this->fractal->createData(new Collection($diagnostico->comments,
                    new CommentdxTransformer($requestUserId)))->toArray();

        return $response->withJson(['comments' => $data['data']])
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    }

    /**
     * Create a new comment
     *
     * @param \Slim\Http\Request  $request
     * @param \Slim\Http\Response $response
     *
     * @param array               $args
     *
     * @return \Slim\Http\Response
     */
    public function store(Request $request, Response $response, array $args)
    {
        //$diagnostico = Diagnostico::query()->where('id', $args['diagnostico'])->firstOrFail();
        $requestUser = $this->auth->requestUser($request);

        if (is_null($requestUser)) {
            return $response->withJson([], 401);
        }

        $this->validator->validateArray($data = $request->getParam('comment'),
            [
                'body' => v::notEmpty(),
            ]);

        if ($this->validator->failed()) {
            return $response->withJson(['errors' => $this->validator->getErrors()], 422);
        }

        $comment = Commentdx::create([
            'body'       => $data['body'],
            'user_id'    => $requestUser->id,
            'diagnostico_id' => $args['diagnostico']
        ]);

        $data = $this->fractal->createData(new Item($comment, new CommentdxTransformer()))->toArray();

        return $response->withJson(['comment' => $data])
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

    }



}
