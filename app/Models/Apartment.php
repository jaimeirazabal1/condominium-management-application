<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apartment extends Model
{
    use HasFactory;
    protected $fillable = ['number', 'owner_id'];

    public function owner()
    {
        return $this->belongsTo(Owner::class);
    }

    public function payments()
    {
        return $this->hasMany(Payment::class);
    }
}
