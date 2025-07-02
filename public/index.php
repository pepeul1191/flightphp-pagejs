<?php

require __DIR__ . '/../vendor/autoload.php';

Flight::route('GET /', 'render_index');
Flight::route('GET /acerca', 'render_index');

function render_index() {
  readfile(__DIR__ . '/views/index.html');
}

Flight::start();