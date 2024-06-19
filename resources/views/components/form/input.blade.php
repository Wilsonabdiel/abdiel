@props(['name'])

<x-form.field>
    <x-form.label name="{{ $name }}"/>

    <input class="border border-gray-200 p-2 w-full rounded"
           name="{{ $name }}"
           id="{{ $name }}"
           {{ $attributes->merge(['value' => old($name)]) }}
           @if (str_ends_with($name, '[]')) multiple @endif
    >

    <x-form.error name="{{ $name }}"/>
</x-form.field>
