<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Action extends Model
{
    use HasFactory;
    protected $table = 'actions';
    
    protected $fillable = ["distanceKM", "date_completed", "user_id", "activity_id"];

    public function user()
    {
        return $this->belongsTo(Article::class);
    }
}
