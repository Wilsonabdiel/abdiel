<div>
    <!-- The only way to do great work is to love what you do. - Steve Jobs -->
        <h1>Blog Posts</h1>
    <div>
        <form method="POST" action="{{ route('posts.add') }}">
            @csrf <!-- CSRF protection -->
            <div class="form-group">
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="slug">Slug:</label>
                <input id="slug" name="slug" class="form-control"  required>
            </div>
            <div class="form-group">
                <label for="excerpt">excerpt:</label>
                <input id="excerpt" name="excerpt" class="form-control"  required>
            </div>

            <div class="form-group">
                <label for="body">Body:</label>
                <textarea id="body" name="body" class="form-control" rows="20" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>

@foreach ($posts as $post)
            <div>
                <h2>{{ $post->title }}</h2>
                <p>{{ $post->excerpt }}</p>
                <a href="{{ route('posts.show', $post) }}">Read more</a>
            </div>
        @endforeach
        {{ $posts->links() }}

</div>
