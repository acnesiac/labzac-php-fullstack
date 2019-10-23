<?php

namespace Conduit\Transformers;

use Conduit\Models\Post;
use League\Fractal\TransformerAbstract;

class PostTransformer extends TransformerAbstract
{
    public function transform(Post $post)
    {
        return [
            "description"    => $post->description
          ];
    }
}
