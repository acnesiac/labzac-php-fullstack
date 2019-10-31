<?php

namespace Conduit\Transformers;

use Conduit\Models\Article;
use Conduit\Models\DxComment;
use Conduit\Models\User;
use League\Fractal\ItemResource;
use League\Fractal\TransformerAbstract;

class CommentDXTransformer extends TransformerAbstract
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
     * CommentTransformer constructor.
     *
     * @param int $requestUserId
     */
    public function __construct($requestUserId = null)
    {
        $this->requestUserId = $requestUserId;
    }

    public function transform(DxComment $comment)
    {
        return [
            'id'        => $comment->id,
            'createdAt' => $comment->created_at->toIso8601String(),
            'updatedAt' => isset($user->update_at) ? $comment->update_at->toIso8601String() : $comment->update_at,
            'body'      => $comment->body,
        ];
    }

    /**
     * Include Author
     *
     * @param \Conduit\Models\DxComment $comment
     *
     * @return \League\Fractal\Resource\Item
     */
    public function includeAuthor(DxComment $comment)
    {
        $author = $comment->user;

        return $this->item($author, new AuthorTransformer($this->requestUserId));
    }
}