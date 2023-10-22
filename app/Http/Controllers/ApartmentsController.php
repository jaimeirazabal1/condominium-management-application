<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Apartment;

class ApartmentsController extends Controller
{
    public function index(Request $request)
    {
        $apartments = \DB::table('apartments')->select('number', \DB::raw('COUNT(*) as count'))->groupBy('number')->get();

        return Response()->json($apartments);
    }

}
