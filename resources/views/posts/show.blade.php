<div>
    <!-- Happiness is not something readymade. It comes from your own actions. - Dalai Lama -->

        <h1>{{ $post->title }}</h1>
        <p>{{ $post->body }}</p>
        <a href="{{ route('posts.index') }}">Back to all posts</a>

    <form action="{{ route('posts.delete', $post->id) }}" method="POST">
            @csrf
            @method('DELETE')
            <button type="submit" class="btn btn-danger">Delete</button>
        </form>


    <form action="{{ route('posts.edit', $post->id) }}" method="GET">
        @csrf

        <button type="submit" class="btn btn-danger">Edit</button>
    </form>
</div>
