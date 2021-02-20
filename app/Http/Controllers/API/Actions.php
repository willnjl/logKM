<?php

namespace App\Http\Controllers\API;


use App\Models\Action;
use App\Models\User;
use App\Http\Resources\API\ActionListResource;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Actions extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       return Action::all();
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->all();

        $action = Action::create([
            'distanceKM' => $data['distanceKM'],
            'date_completed' => $data['date_completed'],
            'user_id' => $data['id'],
            'activity_id' => $data['activity_id']
        ]);

        return $action;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $user = User::find($id);
        return ActionListResource::collection($user->actions);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
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
