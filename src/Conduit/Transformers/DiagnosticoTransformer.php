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

    public function transform(Diagnostico $dx)
    {
        return [
            "id"             => $dx->id,
            "slug"           => $dx->slug,
            "title"          => $dx->title,
            "description"    => $dx->description,
            "body"           => $dx->body,
            "tagList"        => optional($dx->tags()->get(['title']))->pluck('title'),
            'createdAt'      => $dx->created_at->toIso8601String(),
            'updatedAt'      => isset($user->update_at) ? $dx->update_at->toIso8601String() : $dx->update_at,
            'venta'          => $dx->venta
        ];
    }


    /**
     * Include Author
     *
     * @param \Conduit\Models\Diagnostico $article
     *
     * @return \League\Fractal\Resource\Item
     * @internal param \Conduit\Models\DxComment $comment
     *
     */
    public function includeAuthor(Diagnostico $article)
    {
        $author = $article->user;

        return $this->item($author, new AuthorTransformer($this->requestUserId));
    }

}   
