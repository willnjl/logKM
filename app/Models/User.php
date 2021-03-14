<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use App\Models\Action;
use App\Models\Team;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar',
        'team_id'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

  public function actions()
  {
      return $this->hasMany(Action::class)->orderBy('date_completed', 'DESC');
  }

  public function team()
  {
      return $this->belongsTo(Team::class);
  }

  public function getTotal()
  {
      return $this->actions
        ->pluck('distanceKM')
        ->reduce(fn($acc, $val) => $acc + $val, 0);
  }
  public function getCount()
  {
      return $this->actions
        ->count();
  }
  public function getActivityBreakdown()
  {
      
      $groups = $this->actions->mapToGroups(function($item, $key){
        return [$item['activity_id'] => $item['distanceKM']];
      });
      return $groups;
  }

  public function recent()
  {
     return $this->actions->take(1);
  }
}
