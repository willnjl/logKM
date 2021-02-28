<?php

namespace App\Http\Resources\API;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Models\Activity;

class ActionListResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
       
        $sport = Activity::find($this->activity_id)->name;
        return [
            'templates'=> [
                'distance' => $this->distanceKM,
                'activity' => $sport,
                'activity_id' => $this->activity_id,
                'date_completed' => $this->date_completed,
                'date_created' => $this->created_at
            ],
        
        ];
    }
}
