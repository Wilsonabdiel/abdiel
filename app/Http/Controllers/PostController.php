<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::latest()->paginate(10);

        return view('posts.index', compact('posts'));
    }
    public function show(Post $post)
    {
        return view('posts.show', compact('post'));
    }
    public function delete($id)
    {
        $post = Post::find($id);
        if($post){
            $post->delete();
        }
        return redirect()->route('posts.index');
    }
    public function add(Request $req)
    {
        $req->validate([
            'title'=>'required|string',
            'body'=>'required|string',
            'slug'=>'required',
            'excerpt'=>'required|string'
        ]);
        $post = new Post();
        $post->title = $req->input('title');
        $post->body = $req->input('body');
        $post->slug = $req->input('slug');
        $post->excerpt = $req->input('excerpt');


        $post->save();

        return redirect()->route('posts.index');

    }
    public function edit($id)
    {
        $post = Post::find($id);
        return view('posts.edit', compact('post'));
    }
    public function update(Request $req, $id)
    {
        $post = Post::find($id);
        $post->title = $req->input('title');
        $post->body = $req->input('body');
        $post->slug = $req->input('slug');
        $post->excerpt = $req->input('excerpt');

        $post->save();
        return redirect('/items')->with('success', 'Item updated successfully');
    }
}
