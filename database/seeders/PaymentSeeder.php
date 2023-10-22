<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Payment;
use App\Models\Apartment;
class PaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $apartments = Apartment::all();
        foreach ($apartments as $apartment) {
            Payment::factory()->count(5)->create(['apartment_id' => $apartment->id]); // 5 pagos por apartamento como ejemplo
        }
    }
}
