<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewActionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'distanceKM' => ['required', 'numeric', 'max:200', ],
            'date_completed' => ['required', 'date' ],
            'user_id' => ['required', 'numeric'],
            'activity' => ['required', 'numeric']
        ];
    }
}
