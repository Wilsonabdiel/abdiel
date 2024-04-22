<div>
    <!-- Do what you can, with what you have, where you are. - Theodore Roosevelt -->

    <form method="POST" action="{{ route('posts.add') }}">
        @csrf <!-- CSRF protection -->
        <div class="form-group">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" class="form-control" required>
        </div>
        <div class="form-group">
            <label for="slug">Slug:</label>
            <textarea id="slug" name="slug" class="form-control" rows="5" required></textarea>
        </div>
        <div class="form-group">
            <label for="excerpt">excerpt:</label>
            <textarea id="excerpt" name="excerpt" class="form-control" rows="5" required></textarea>
        </div>

        <div class="form-group">
            <label for="body">Body:</label>
            <textarea id="body" name="body" class="form-control" rows="5" required></textarea>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

</div>
