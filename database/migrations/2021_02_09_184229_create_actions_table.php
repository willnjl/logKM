<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('actions', function (Blueprint $table) {
            $table->id();
            $table->float('distanceKM', 8, 2);
            $table->date('date_completed');
            $table->timestamps();
            
            $table->foreignId('user_id')->unsigned();
            $table->foreignId('activity_id')->unsigned();
            $table->foreign('activity_id')->references('id')->on('activities')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('actions', function(Blueprint $table){
            $table->dropForeign(['activity_id']);
            $table->dropForeign(['user_id']);
            $table->dropColumn('activity_id');
            $table->dropColumn('user_id');
        });
        Schema::dropIfExists('actions');
    }
}
