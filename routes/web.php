<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::post('/post/store', [HomeController::class, 'store'])->name('post.store');
Route::get('/about', [PageController::class, 'about'])->name('about');
Route::get('/departments', [PageController::class, 'departments'])->name('departments');
Route::get('/doctors', [PageController::class, 'doctors'])->name('doctors');
Route::get('/faq', [PageController::class, 'faq'])->name('faq');
Route::get('/testimonials', [PageController::class, 'testimonials'])->name('testimonials');
Route::get('/gallery', [PageController::class, 'gallery'])->name('gallery');