
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

| :placard: Informações  |     |
| -------------  | --- |
| :sparkles: Nome        | Weather Forecast
| :label: Tecnologias | React, Laravel, SweetAlert, Sqlite

### ⚙️ Configurando o projeto
 Para subir a aplicação front-end rodar o comando abaixo(lembre-se de utilizar a versão correta do NPM).
```bash
npm install
```
### ▶️ Dentro do diretorio do projeto você inicia aplicação com
```bash
npm start
```
### 📚 Bibliotecas
* [Yup](https://www.npmjs.com/package/yup)
* [react-modal](https://www.npmjs.com/package/react-modal)
* [react-data-table-component](https://react-data-table-component.netlify.app/?path=/docs/getting-started-intro--page)
* [Formik](https://formik.org/docs/overview)

### ⚙️ Instalando o backend
É recomendado utilizar um navegador que permita requisições HTTP por padrão, como o Firefox. Navegadores chromium bloqueiam por padrão requisições HTTP
Após ter instalado o composer 2.5.7 e o PHP 8.2 e ter colocado
o PHP nas variaveis de ambiente (caso seu sistema seja windows).

   instale o laravel usando o comando: 
  ```bash 
  composer global require "laravel/installer"
  ```
   Depois, apenas rode o comando abaixo para instalar as dependencias do projeto.
  ```bash 
  composer install 
  ``` 
  Rode o comando abaixo e veja se conseguiu subir o servidor.
  ```bash 
  php artisan serve 
  ```
   Por fim, execut o comando a seguir e verifique se foi possivel estabelecer uma conexão com o banco sqlite.
  ```bash
  php artisan migrate
  ```

### ⚠️ caso tenha problemas de conexão com o banco Sqlite siga os seguintes passos:

  * Copie o meu .env dentro da pasta ```arquivos-backup```;
  * Deixa todas as variaveis DB_ comentadas exceto a DB_CONNECTION.
    A tem que ser DB_CONNECTION=sqlite.
  * Copie o arquivo o meu database.sqlite (também dentro da pasta ```arquivos-backup```) e deixe ele na pasta database
    e rode o comando ```php artisan migrate```.


### 💡 Funcionalidades

## Condições climáticas
É possivel procurar as condições climáticas pela cidade usando apena o input de cidade e clicando em buscar

![ezgif com-video-to-gif(1)](https://github.com/marcosgregorio/weather-forecast/assets/78617642/0819d243-0d16-4321-a535-f11b8bc51248)

## Salvar os dados

![ezgif com-video-to-gif(2)](https://github.com/marcosgregorio/weather-forecast/assets/78617642/aeff967d-4303-421e-89d6-39b0d6af8ef2)

## Consultar dados salvos

![ezgif com-video-to-gif(3)](https://github.com/marcosgregorio/weather-forecast/assets/78617642/487afcfa-a855-4c88-92ab-1770b8921ca4)

## Comparar temperaturas 

![ezgif com-video-to-gif(4)](https://github.com/marcosgregorio/weather-forecast/assets/78617642/18c1a39e-f4ec-4463-af96-a9ef1a382569)

## Layout responsivo
![ezgif com-video-to-gif](https://github.com/marcosgregorio/weather-forecast/assets/78617642/114c295d-1b46-402f-a8ce-cd7ccf8af008)
