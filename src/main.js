import $ from 'jquery';
import page from 'page';

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
