<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="calendar-store-route" content="{{ route('calendar.store') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>Calendar</title>
</head>

<body>
    @yield('content')

    <script src={{ asset('js/app.js') }}></script>
    <script>
        let booking = @json($events);
    </script>
</body>

</html>
