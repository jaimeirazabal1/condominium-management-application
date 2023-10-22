<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Apartment;
use App\Models\Owner;

class ApartmentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $letters = ['a', 'b', 'c', 'd'];
        $owners = Owner::all();

        foreach ($owners as $index => $owner) {
            for ($building = 1; $building <= 6; $building++) {
                for ($floor = 0; $floor < 3; $floor++) {
                    foreach ($letters as $letter) {
                        $apartmentNumber = "{$building}{$floor}{$letter}";
                        Apartment::factory()->create([
                            'owner_id' => $owner->id,
                            'number' => $apartmentNumber
                        ]);
                    }
                }
            }
        }
    }
}
