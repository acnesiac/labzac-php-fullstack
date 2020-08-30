<?php

namespace Conduit\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * @property integer                                  id
 * @property integer                                  user_id
 * @property \Conduit\Models\User                     user
 * @property \Carbon\Carbon                           created_at
 * @property \Carbon\Carbon                           update_at
 */
class Cliente extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'nombre',
        'email',
        'direccion',
        'user_id'
    ];


    /********************
     *  Relationships
     ********************/

    public function user()
    {
        return $this->belongsTo(User::class);
    }


}
