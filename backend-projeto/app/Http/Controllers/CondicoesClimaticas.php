<?php

namespace app\http\controllers;

use App\Http\Controllers\Controller;
use App\Models\Clima;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Throwable;

class CondicoesClimaticas extends Controller
{
    public function salvarCondicoesClimaticas()
    {
        $user = new Clima();
        $consulta = Clima::select('*')->where('id', 1)->get();
        dd($consulta);
        echo $consulta->toJson();
    }

    public function getDadosTabela(Request $request): Response
    {
        try {
            $consulta = Clima::select(
                'id',
                'localidade',
                'icone_clima',
                'temperatura',
                'velocidade_vento',
                'horario',
                'eh_dia',
            )
                ->whereRaw(
                    'lower(localidade) = ?',
                    strtolower($request->localidade)
                )
                ->get();
            if (empty($consulta))
                return response([], 204);
        } catch (Throwable $th) {
            return response(["error" => $th->getMessage()], 500);
        }

        return response($consulta, 200);
    }
}
