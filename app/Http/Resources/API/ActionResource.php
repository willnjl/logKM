<?php

namespace App\Http\Resources\API;

use Illuminate\Http\Resources\Json\JsonResource;

class ActionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'distance' => $this->distanceKM,
            'activity' => $sport,
            'activity_id' => $this->activity_id,
            'date_completed' => $this->date_completed,
        ];
    }
}
