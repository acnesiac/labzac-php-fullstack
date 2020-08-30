<?php

namespace Conduit\Transformers;

use Conduit\Models\Cliente;
use League\Fractal\TransformerAbstract;

class ClienteTransformer extends TransformerAbstract
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

    public function transform(Cliente $cliente)
    {
        return [
            "id"             => $cliente->id,
            "nombre"         => $cliente->nombre,
            "email"          => $cliente->email,
            "direccion"      => $cliente->direccion,
            'createdAt'      => $cliente->created_at->toIso8601String(),
            'updatedAt'      => isset($cliente->update_at) ? $cliente->update_at->toIso8601String() : $cliente->update_at,

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
    public function includeAuthor(Cliente $cliente)
    {
        $author = $cliente->user;

        return $this->item($author, new AuthorTransformer($this->requestUserId));
    }


}
