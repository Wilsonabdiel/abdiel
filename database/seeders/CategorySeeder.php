<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            ['name' => 'Artificial Intelligence', 'slug' => Str::slug('Artificial Intelligence')],
            ['name' => 'Web Development', 'slug' => Str::slug('Web Development')],
            ['name' => 'Mobile Development', 'slug' => Str::slug('Mobile Development')],
            ['name' => 'Cloud Computing', 'slug' => Str::slug('Cloud Computing')],
            ['name' => 'Cybersecurity', 'slug' => Str::slug('Cybersecurity')],
            ['name' => 'Data Science', 'slug' => Str::slug('Data Science')],
            ['name' => 'Internet of Things', 'slug' => Str::slug('Internet of Things')],
            ['name' => 'Blockchain', 'slug' => Str::slug('Blockchain')],
        ];

        DB::table('categories')->insert($categories);
    }
}
