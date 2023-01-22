<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ware extends Model
{
    use HasFactory;

    protected $fillable = [
        'Art_Nr',
        'Werbung',
        'Menge',
        'Artikelbezeichnung',
        'VE',
        'VK',
        'Gesamt_VK',
        'KG',
        'Barcode'
    ];
}