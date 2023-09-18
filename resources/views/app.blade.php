<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title inertia>{{ config('app.name', 'Write Well') }}</title>
    <meta content="" name="description">
    <meta content="" name="keywords">
    <link href="{{ asset('/img/favicon.png') }}" rel="icon">
    <link href="{{ asset('/img/apple-touch-icon.png') }}" rel="icon">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">
    <link href="{{ asset('/vendor/fontawesome-free/css/all.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/vendor/animate.css/animate.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/vendor/bootstrap/css/bootstrap.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/vendor/bootstrap-icons/bootstrap-icons.css') }}" rel="stylesheet">
    <link href="{{ asset('/vendor/boxicons/css/boxicons.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/vendor/glightbox/css/glightbox.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/vendor/remixicon/remixicon.css') }}" rel="stylesheet">
    <link href="{{ asset('/vendor/swiper/swiper-bundle.min.css') }}" rel="stylesheet">
    <link href="{{ asset('/css/style.css') }}" rel="stylesheet">
    <script src="{{ asset('/vendor/purecounter/purecounter_vanilla.js') }}"></script>
    <script src="{{ asset('/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('/vendor/glightbox/js/glightbox.min.js') }}"></script>
    <script src="{{ asset('/vendor/swiper/swiper-bundle.min.js') }}"></script>
    {{-- * Template Name: Medilab
    * Updated: Aug 30 2023 with Bootstrap v5.3.1
    * Template URL: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/
    * Author: BootstrapMade.com
    * License: https://bootstrapmade.com/license/ --}}

    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>

<body>
    @inertia
</body>
</html>