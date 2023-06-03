
<header style='display:flex'>
  <h1>
     <img style='width:50px; height:50px; ' src='https://github.com/marcosgregorio/weather-forecast/blob/main/frontend-projeto/public/assets/weather.png?raw=true' />
    Weather Forecast </h1> 
</header>
<div style='display:flex'>
  <img src='https://img.shields.io/badge/NPM-v9.5.1-yellow' />
  <img src='https://img.shields.io/badge/NODE-v18.16.0-brightgreen' />
  <img src='https://img.shields.io/badge/PHP-v8.2.4-blueviolet' />
  <img src='https://img.shields.io/badge/Composer-v2.5.7-lightgrey' />
  <img src='https://img.shields.io/badge/Laravel%20Installer-v4.5.0-red' />
</div>

Uma aplicação que busca os dados climáticos de uma determinada
cidade utilizando a api da https://weatherstack.com. 

Uma aplicação simples usando React, Laravel e um banco Sqlite.

| :placard: Informações  |     |
| -------------  | --- |
| :sparkles: Nome        | Weather Forecast
| :label: Tecnologias | React, Laravel, SweetAlert

# Preparação do ambiente
É recomendado utilizar um navegador que permita requisições HTTP por padrão, como o Firefox. Navegadores chromium bloqueiam por padrão requisições HTTP
Após ter instalado o composer 2.5.7 e o PHP 8.2 e ter colocado
o PHP nas variaveis de ambiente (caso seu sistema seja windows).

  -> instale o laravel usando o comando composer global require "laravel/installer"
  -> Depois, apenas rode o comando composer install para instalar as dependencias do projeto.
  -> Rode o comando php artisan serve e veja se conseguiu subir o servidor.
  -> Rode o comando php artisan migrate e verifique se foi possivel estabelecer uma conexão
    com o banco sqlite.

caso tenha problemas de conexão com o banco sqlite siga os seguintes passos:

  -> Copie o meu .env;
  -> Deixa todas as variaveis DB_ comentadas exceto a DB_CONNECTION.
    A tem que ser DB_CONNECTION=sqlite.
  -> Copie o arquivo o meu database.sqlite e deixe ele na pasta database
    e rode o comando PHP artisan migrate.

## 
