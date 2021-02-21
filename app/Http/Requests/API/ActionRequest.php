<?php

namespace App\Http\Requests\API;

use Illuminate\Foundation\Http\FormRequest;

class ActionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'distanceKM' => ['required',  'numeric', 'max:100'],
            'date_completed' => ['required', 'date'],
            'activity_id' => ['required', 'numeric']
        ];
    }
}
