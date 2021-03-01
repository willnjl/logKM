<?php

namespace App\Models;
use App\Models\User;
use App\Models\Action;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Team extends Model
{
    use HasFactory;
       protected $table = 'teams';
        protected $fillable = ['id_token', 'goal'] ;

     public function users()
  {
      return $this->hasMany(User::class);
  }
     public function actions()
  {
      return $this->hasMany(Action::class)->orderBy('date_completed', 'DESC');
  }
  public function getTotal()
  {
     return  $this->actions->pluck('distanceKM')->reduce(fn($acc, $val) => $acc + $val, 0);
  }
}
