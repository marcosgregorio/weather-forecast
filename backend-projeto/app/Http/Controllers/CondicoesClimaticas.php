<?php

namespace app\http\controllers;

use App\Http\Controllers\Controller;
use App\Models\Clima;
use Illuminate\Http\Response;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Throwable;

class CondicoesClimaticas extends Controller
{
    public function salvarDados(Request $request): Response
    {
        try {
            $dados = $request->all();
            $this->salvarDadosNovos($dados);
            return response(['sucesso'], 200);
        } catch (Throwable $th) {
            return response(['erro'], 500);
        }
    }

    private function salvarDadosNovos(array $dados): void
    {
        foreach ($dados as $key => $dadoClima) {
            $clima = new Clima();
            $clima->localidade = $dadoClima['localidade'];
            $clima->icone_clima = $dadoClima['iconeClima'];
            $clima->temperatura = $dadoClima['temperatura'];
            $clima->velocidade_vento = $dadoClima['velocidadeVento'];
            $clima->horario = $dadoClima['horario'];
            $clima->eh_dia = $dadoClima['ehDia'];
            $clima->save();
        }
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
                    'lower(localidade) = ?', strtolower($request->localidade)
                )
                ->get()
                ->toArray();
            if (empty($consulta))
                return response([], 204);

            $consulta = $this->formataDados($consulta);
        } catch (Throwable $th) {
            return response(["error" => $th->getMessage()], 500);
        }

        return response($consulta, 200);
    }

    public function getTodosClimas():JsonResponse
    {
        try {
            $dados = Clima::select(
                'id',
                'localidade',
                'icone_clima',
                'temperatura',
                'velocidade_vento',
                'horario',
                'eh_dia',
            )
                ->get()
                ->toArray();

            $dados = $this->formataDados($dados);
            return response()->json(["dados" =>$dados], 200);
        } catch (Throwable $th) {
            return response()->json(["error" => $th->getMessage()], 500);
        }
    }

    /**
     * Formata os dados para serem devolvidos do jeito
     * esperado pelo frontend 
    */
    private function formataDados(array $dados): array
    {
        $dadosFormatado = [];
        foreach ($dados as $key => $dadoClima) {
            $obj = [
                "localidade" => $dadoClima["localidade"],
                "iconeClima" => $dadoClima["icone_clima"],
                "temperatura" => $dadoClima["temperatura"],
                "velocidadeVento" => $dadoClima["velocidade_vento"],
                "horario" => $dadoClima["horario"],
                "ehDia" => $dadoClima["eh_dia"],
            ];
            $dadosFormatado[] = $obj;
        }
        return $dadosFormatado;
    }
}
