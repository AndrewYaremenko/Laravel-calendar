@extends('layouts.main')
@section('content')
    @include('partials.modal')

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="text-center mt-5">FullCalendar Laravel App</h3>
                <div class="col-md-11 offset-1 mt-5 mb-5">

                    <div id="calendar"></div>

                </div>
            </div>
        </div>
    </div>
@endsection
