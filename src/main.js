import $ from 'jquery';
import page from 'page';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function loadView(path) {
  $('#app').load(`/views${path}.html`);
}

// Rutas
page('/', () => loadView('/home'));
page('/acerca', () => loadView('/about'));

// SPA navegación sin recarga
$(document).on('click', 'a[data-link]', function (e) {
  e.preventDefault();
  page.show($(this).attr('href'));
});

page();
