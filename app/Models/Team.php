<?php

namespace App\Models;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;
       protected $table = 'teams';
    protected $fillable = ['id_token'] ;

     public function users()
  {
      return $this->hasMany(User::class);
  }
}
