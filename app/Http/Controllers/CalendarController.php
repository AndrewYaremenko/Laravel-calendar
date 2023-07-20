<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class CalendarController extends Controller
{
    public function index()
    {
        $bookings = Booking::all();
        $events = array();

        foreach ($bookings as $booking) {
            $events[] = [
                'title' => $bookings->title,
                'start' => $bookings->start_date,
                'end' => $bookings->end_date,
            ];
        }
        return view('calendar.index', ['events' => $events]);
    }
}
