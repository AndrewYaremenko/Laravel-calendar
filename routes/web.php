<?php

use App\Http\Controllers\CalendarController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/calendar', [CalendarController::class, 'index'])->name('calendar.index');
Route::post('/calendar', [CalendarController::class, 'store'])->name('calendar.store');
Route::patch('/calendar/{booking}', [CalendarController::class, 'update'])->name('calendar.update');
Route::delete('/calendar/{booking}', [CalendarController::class, 'destroy'])->name('calendar.destroy');
