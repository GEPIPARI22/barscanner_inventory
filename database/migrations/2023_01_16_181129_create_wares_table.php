<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('wares', function (Blueprint $table) {
            $table->id();
            $table->string('Art_Nr');
            $table->string('Werbung');
            $table->string('Menge');
            $table->string('Artikelbezeichnung');
            $table->string('VE');
            $table->string('VK');
            $table->string('Gesamt_VK');
            $table->string('KG');
            $table->string('Barcode');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('wares');
    }
};