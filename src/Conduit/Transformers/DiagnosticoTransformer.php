<?php

namespace Conduit\Transformers;

use Conduit\Models\Diagnostico;
use League\Fractal\TransformerAbstract;

class DiagnosticoTransformer extends TransformerAbstract
{

    /**
     * Include resources without needing it to be requested.
     *
     * @var array
     */
    protected $defaultIncludes = [
        'author',
    ];

    /**
     * @var integer|null
     */
    protected $requestUserId;

    /**
     * ArticleTransformer constructor.
     *
     * @param int $requestUserId
     */
    public function __construct($requestUserId = null)
    {
        $this->requestUserId = $requestUserId;
    }

    public function transform(Diagnostico $article)
    {
        return [
            "id"           => $article->id,
            "slug"           => $article->slug,
            "title"          => $article->title,
            "description"    => $article->description,
            "body"           => $article->body,
            "tagList"        => optional($article->tags()->get(['title']))->pluck('title'),
            'createdAt'      => $article->created_at->toIso8601String(),
            'updatedAt'      => isset($user->update_at) ? $article->update_at->toIso8601String() : $article->update_at
        ];
    }


    /**
     * Include Author
     *
     * @param \Conduit\Models\Diagnostico $article
     *
     * @return \League\Fractal\Resource\Item
     * @internal param \Conduit\Models\Comment $comment
     *
     */
    public function includeAuthor(Diagnostico $article)
    {
        $author = $article->user;

        return $this->item($author, new AuthorTransformer($this->requestUserId));
    }

}   
