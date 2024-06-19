<x-layout>
    <x-setting heading="Add New Category">
        <form method="POST" action="/admin/category" enctype="multipart/form-data">
            @csrf

            <x-form.input name="name" required />
            <x-form.input name="slug" required />


            <x-form.button>Add</x-form.button>
        </form>
    </x-setting>
</x-layout>
