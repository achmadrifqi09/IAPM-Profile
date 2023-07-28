<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ config('app.name', 'IAPM Elinksolution') }}</title>
        <link rel="icon" href="{{asset('assets/image/ic-logo.webp')}}">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        @vite('resources/js/app.jsx')
        @vite('resources/css/app.css')
        @inertiaHead
    </head>

    <body>
        @inertia
    </body>
</html>