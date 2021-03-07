<?php


namespace App\Http\Controllers\API;
use App\Http\Resources\API\UserResource;

use Illuminate\Support\Facades\Storage;
use App\Models\User;
use App\Http\Requests\API\UserRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Users extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return new UserResource(User::findOrFail($id));
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function Overview($id)
    {
        $user = User::findOrFail($id);

        return [
            'total' => $user->getTotal(),
            'count' => $user->getCount(),
            'activities' => $user->getActivityBreakdown()
        ];
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserRequest $request, User $user)
    {
        $data = $request->all();
        $user->update([
            "name" => $data['name'],
            "email" => $data['email'],
        ]);
        if($request->file('avatar')){
            $user->update([
                    'avatar' => $request->file('avatar')->storePublicly('avatars')
                ]);
            };

          return new UserResource(User::findOrFail($user->id));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
