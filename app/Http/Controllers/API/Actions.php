<?php

namespace App\Http\Controllers\API;


use App\Models\Action;
use Carbon\Carbon;
use App\Models\User;
use App\Http\Resources\API\ActionListResource;

use App\Http\Requests\API\ActionRequest;
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

        $data = Action::paginate(3);
       
       return [ ActionListResource::collection($data)->response()->getData(true)];
        
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ActionRequest $request)
    {
        return auth()->user()->id;
        $data = $request->all();
        $date = new Carbon($data['date_completed']);
        $action = Action::create([
            'distanceKM' => $data['distanceKM'],
            'date_completed' => $date,
            'user_id' => auth()->user()->id(),
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
        $user = User::findorfail($id);
        $total = $user->getTotal();
        return response([
            'data' =>[
                'total' => $total,
               'actions' => ActionListResource::collection($user->actions)->paginate(3),
            ]
        ]);
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
