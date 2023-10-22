<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
// Ruta de fallback para entregar la aplicación React
Route::get('/{any}', function () {
    return view('react');  // Asume que tu vista se llama 'app.blade.php'
})->where('any', '.*');

Route::get('/', function () {
    return view('react');
});
