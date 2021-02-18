<?php


namespace App\Http\Controllers\API;
use App\Http\Resources\API\UserListResource;
use App\Http\Resources\UserResource;
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
        //
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
                    'avatar' => $request->file('avatar')->store('avatars')
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
