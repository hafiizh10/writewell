<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->paginate(4);

        return inertia('Home', [
            'posts' => $posts,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'author' => 'required',
            'content' => 'required',
        ]);

        Post::create([
            'title' => $request->title,
            'author' => $request->author,
            'content' => $request->content,
        ]);

        return redirect()->back();
    }
}
