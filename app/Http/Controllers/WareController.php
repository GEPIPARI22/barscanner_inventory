<?php

namespace App\Http\Controllers;

use App\Models\Ware;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class WareController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $wares = Ware::all();
        return Inertia::render('Ware/List', ['wares' => $wares]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Ware/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'Art_Nr' => ['required'],
            'Werbung' => ['required'],
            'Menge' => ['required'],
            'Artikelbezeichnung' => ['required'],
            'VE' => ['required'],
            'VK' => ['required'],
            'Gesamt_VK' => ['required'],
            'KG' => ['required'],
            'Barcode' => ['required']
        ])->validate();

        Ware::create($request->all());

        return redirect()->route('wares.index');
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ware  $ware
     * @return \Illuminate\Http\Response
     */
    public function edit(Ware $ware)
    {
        return Inertia::render('Ware/Edit', [
            'ware' => $ware
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ware  $ware
     * @return \Illuminate\Http\Response
     */
    public function update($id, Request $request)
    {
        Validator::make($request->all(), [
            'Art_Nr' => ['required'],
            'Werbung' => ['required'],
            'Menge' => ['required'],
            'Artikelbezeichnung' => ['required'],
            'VE' => ['required'],
            'VK' => ['required'],
            'Gesamt_VK' => ['required'],
            'KG' => ['required'],
            'Barcode' => ['required']
        ])->validate();

        Ware::find($id)->update($request->all());

        return redirect()->route('wares.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ware  $ware
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Ware::find($id)->delete();

        return redirect()->route('wares.index');
    }
}