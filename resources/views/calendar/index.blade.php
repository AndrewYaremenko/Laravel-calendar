@extends('layouts.main')
@section('content')
    @include('partials.modalSave')
    @include('partials.modalDelete')

    <div class="container">
        <div class="row">
            <div class="col-12">
                <h3 class="text-center mt-5">FullCalendar Laravel App</h3>
                <div class="mt-5 mb-5 text-centeк">

                    <div id="calendar"></div>

                </div>
            </div>
        </div>
    </div>
@endsection
