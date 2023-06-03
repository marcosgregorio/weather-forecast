<?php

namespace app\http\controllers\weather;

use app\http\controllers\controller;
use App\Models\Clima;
use illuminate\http\request;

class CondicoesClimaticas extends controller
{
    public function salvarCondicoesClimaticas(request $request)
    {
        $consulta = new Clima();
        dd($consulta);
        echo $consulta;
    }
}
