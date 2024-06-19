<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        return Category::all();
    }
    public function create()
    {
        return view('admin.category.create');
    }
    public function store()
    {
        Category::create([
            'name'=> request('name'),
            'slug' => request('slug'),
       ]);
        return redirect('/');
    }

}
