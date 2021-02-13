<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Auth\RegisterController;
class UserController extends Controller
{
    public function register(Request  $request)
    {
        RegisterController::validator($request);
    }
}