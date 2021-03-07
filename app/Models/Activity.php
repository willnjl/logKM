<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Activity;

class Activity extends Model
{
    use HasFactory;

    protected $fillable = ["name", ];

    public function actions()
    {
      return $this->hasMany(Action::class)->orderBy('date_completed', 'DESC');
    } 
}
