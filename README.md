# FlightPHP + PageJS

Instalar dependencias de PHP:

    $ composer install

Instalar dependencias de NodeJS:

    $ npm install

Descripción del proyecto:

| Carpeta / Archivo           | Descripción                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| `/views/`                  | Contiene las vistas HTML que se cargan dinámicamente vía AJAX               |
| ├── 404.html               | Página de error personalizada                                               |
| ├── about.html             | Vista de la sección "Acerca"                                                |
| ├── home.html              | Vista de inicio                                                             |
| ├── index.html             | Archivo HTML principal que carga la SPA                                    |
| `.htaccess`                | Configuración del servidor Apache (opcional para reescrituras en SPA)      |
| `favicon.ico`              | Ícono del sitio                                                             |
| `index.php`                | Punto de entrada para servir la app desde el backend (FlightPHP, etc.)     |
| `/src/`                    | Código fuente JavaScript y recursos relacionados                           |
| ├── `/assets/`             | Archivos CSS agrupados por tipo o build                                     |
| │   ├── vendor.css         | Estilos de librerías externas (ej: Bootstrap)                              |
| │   └── website.css        | Estilos personalizados del sitio                                            |
| ├── `/entries/`            | Archivos de entrada para el bundler (ej: Rollup)                            |
| │   ├── vendor.js          | Entrypoint para librerías y dependencias externas                           |
| │   └── website.js         | Entrypoint principal de la aplicación web                                   |
| ├── `/routes/`             | Definiciones de rutas `page.js` y controladores SPA                         |
| │   └── website_routes.js  | Módulo de enrutamiento SPA con `page.js`                                    |
| ├── `/utils/`              | Funciones reutilizables y utilitarias                                       |
| │   ├── loadView.js        | Función para cargar vistas HTML vía AJAX                                    |
| │   ├── setNav.js          | Función para activar visualmente el enlace de navegación actual             |
| │   └── setTitle.js        | Función para cambiar dinámicamente el título de la página                   |
| └── `/views/`              | Lógica JavaScript específica por vista SPA                                  |
|     ├── about.js           | Comportamiento asociado a la vista `/acerca`                                |
|     └── home.js            | Comportamiento asociado a la vista `/home`                                  |
