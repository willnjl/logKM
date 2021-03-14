<?php

namespace App\Http\Resources\API;

use Illuminate\Http\Resources\Json\JsonResource;

class UserOverviewResource extends JsonResource
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
            'total' => $this->getTotal(),
            'count' => $this->getCount(),
            'activityBreakdown' => $this->getActivityBreakdown() 
         ];
    }

    // [{id: 1, distances: []}]
}
