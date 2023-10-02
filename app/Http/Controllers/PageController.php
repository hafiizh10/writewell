<?php

namespace App\Http\Controllers;

class PageController extends Controller
{
    public function about()
    {
        return inertia('About');
    }

    public function departments()
    {
        return inertia('Departments');
    }

    public function doctors()
    {
        return inertia('Doctors');
    }

    public function faq()
    {
        return inertia('Questions');
    }

    public function testimonials()
    {
        return inertia('Testimoni');
    }

    public function gallery()
    {
        return inertia('Gallery');
    }
}
