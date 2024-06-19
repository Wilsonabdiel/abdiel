<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\Image;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class AdminPostController extends Controller
{
    public function index()
    {
        return view('admin.posts.index', [
            'posts' => Post::paginate(50)
        ]);
    }

    public function create()
    {
        return view('admin.posts.create');
    }

    public function store(Post $post)
    {
        $validatedData = $this->validatePost(); // Validate the post data

        $validatedData['user_id'] = request()->user()->id; // Assign the user ID
        $validatedData['thumbnail'] = $validatedData['thumbnail']->store('thumbnails'); // Store the thumbnail

        $newPost = Post::create($validatedData); // Create the post

        // Handle multiple images
        if (isset($validatedData['images']) && count($validatedData['images']) > 0) {
            foreach ($validatedData['images'] as $image) {
                $path = $image->store('images', 'public');

                // Save image path in the database
                Image::create([
                    'post_id' => $newPost->id,
                    'path' => $path,
                ]);
            }
        }

        return redirect('/')->with('success', 'Post created successfully.');
    }

    public function edit(Post $post)
    {
        return view('admin.posts.edit', ['post' => $post]);
    }

    public function update(Request $request, Post $post)
    {
        $validatedData = $this->validatePost($post); // Validate the updated post data

        // Update the thumbnail if provided
        if ($request->hasFile('thumbnail')) {
            $validatedData['thumbnail'] = $request->file('thumbnail')->store('thumbnails');
        }

        $post->update($validatedData); // Update the post

        return back()->with('success', 'Post updated successfully.');
    }

    public function destroy(Post $post)
    {
        $post->delete(); // Delete the post

        return back()->with('success', 'Post deleted successfully.');
    }

    protected function validatePost(?Post $post = null): array
    {
        $post ??= new Post();

        $validated = request()->validate([
            'title' => 'required',
            'thumbnail' => $post->exists ? ['image'] : ['required', 'image'],
            'slug' => ['required', Rule::unique('posts', 'slug')->ignore($post)],
            'excerpt' => 'required',
            'body' => 'required',
            'category_id' => ['required', Rule::exists('categories', 'id')],
            'images.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        // Process thumbnail
        if (isset($validated['thumbnail'])) {
            $validated['thumbnail'] = $validated['thumbnail']->store('thumbnails');
        }

        // Process images
        if (isset($validated['images'])) {
            foreach ($validated['images'] as $key => $image) {
                $validated['images'][$key] = $image->store('images', 'public');
            }
        }

        return $validated;
    }
}
