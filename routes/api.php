<?php

use App\Models\User;
use App\Models\Activity;
use App\Http\Controllers\API\Actions;
use App\Http\Controllers\API\Users;
use App\Http\Controllers\API\Teams;
use App\Http\Controllers\API\Activities;
use App\Http\Resources\API\UserResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::group(["prefix" => "user", "middleware" => ["auth:sanctum"]], function(){
    Route::get('', function (Request $request) {
        return new UserResource($request->user());
    });
    Route::post('/{user}', [Users::class, "update"]);
    Route::get('/{user}', [Users::class, "show"]);
});
Route::get('user/{id}/overview', [Users::class, "Overview"]);

Route::group(["prefix" => "activities", "middleware" => ["auth:sanctum"]],function(){
    Route::get('', [Activities::class, "index"]);
    Route::get('activities', [Activities::class, "index"]);
});
Route::group(["prefix" => "actions", "middleware" => ["auth:sanctum"]],function(){
    Route::get('', [Actions::class, "index"]);
    Route::post('', [Actions::class, "store"]);
    Route::get('/{id}', [Actions::class, "show"]);
});

Route::group([
    'prefix' => 'team',
    //  "middleware" => ["auth:sanctum"]
    ], 
     function(){
        Route::get('/{token}', [Teams::class, "show"]);
        Route::get('/feed/{token}', [Teams::class, "feed"]);
    }
);



Auth::routes();

Route::post('/sanctum/token', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
        'device_name' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return $user->createToken($request->device_name)->plainTextToken;
});