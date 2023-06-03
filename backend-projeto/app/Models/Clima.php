<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Clima extends Model
{
    use HasFactory;
    protected $table = 'table_clima';
    protected $fillable = [
        'localidade',
        'icone_clima',
        'temperatura',
        'velocidade_vento',
        'horario',
        'eh_dia'
    ];
}

