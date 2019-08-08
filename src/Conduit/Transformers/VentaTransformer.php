<?php

namespace Conduit\Transformers;

use Conduit\Models\Venta;
use League\Fractal\TransformerAbstract;

class VentaTransformer extends TransformerAbstract
{
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
            "id"             => $venta->id
        ];
    }
}   