<?php

namespace Conduit\Transformers;

use Conduit\Models\Venta;
use League\Fractal\TransformerAbstract;

class VentaTransformer extends TransformerAbstract
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
     * VentaTransformer constructor.
     *
     * @param int $requestUserId
     */
    public function __construct($requestUserId = null)
    {
        $this->requestUserId = $requestUserId;
    }

    public function transform(Venta $venta)
    {
        return [
            "id"             => $venta->id,
            "description"    => $venta->description,
            "costo"          => $venta->costo,
            'createdAt'      => $venta->created_at->toIso8601String(),
            'updatedAt'      => isset($user->update_at) ? $venta->update_at->toIso8601String() : $venta->update_at
        ];
    }

    /**
     * Include Author
     *
     * @param \Conduit\Models\Article $article
     *
     * @return \League\Fractal\Resource\Item
     * @internal param \Conduit\Models\Comment $comment
     *
     */
    public function includeAuthor(Venta $venta)
    {
        $author = $venta->user;

        return $this->item($author, new AuthorTransformer($this->requestUserId));
    }

}
