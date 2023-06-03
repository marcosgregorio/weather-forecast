<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('table_clima', function (Blueprint $table) {
            $table->id();
            $table->text("localidade");
            $table->text("icone_clima");
            $table->text("temperatura");
            $table->integer("velocidade_vento");
            $table->text("horario");
            $table->text("eh_dia");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('table_clima');
    }
};
