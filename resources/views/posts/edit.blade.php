<div>
    <!-- The only way to do great work is to love what you do. - Steve Jobs -->
    <div>
        <!-- The only way to do great work is to love what you do. - Steve Jobs -->
        <h1>Edit {{$post->title}}</h1>
        <div>
            <form method="POST" action="{{ route('posts.add') }}">
                @csrf <!-- CSRF protection -->
                <div class="form-group">
                    <label for="title">Title:</label>
                    <input type="text" id="title" name="title" class="form-control" value="{{$post->title}}" required>
                </div>
                <div class="form-group">
                    <label for="slug">Slug:</label>
                    <input id="slug" name="slug" class="form-control"  value="{{$post->slug}}"  required>
                </div>
                <div class="form-group">
                    <label for="excerpt">excerpt:</label>
                    <input id="excerpt" name="excerpt" class="form-control"   value="{{$post->excerpt}}" required>
                </div>

                <div class="form-group">
                    <label for="body">Body:</label>
                    <textarea id="body" name="body" class="form-control" rows="20"   required> {{$post->body}}</textarea>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>

        </div>

    </div>
