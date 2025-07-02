<?php

require __DIR__ . '/../vendor/autoload.php';

Flight::route('GET /', 'render_index');
Flight::route('GET /acerca', 'render_index');
Flight::map('notFound', function(){
  if (!headers_sent()) {
    http_response_code(404);
  }
  ob_clean(); 
  readfile(__DIR__ . '/views/404.html');
  exit(); 
});

function render_index() {
  readfile(__DIR__ . '/views/index.html');
}

Flight::start();