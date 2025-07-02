import $ from 'jquery';
import page from 'page';

function loadView(path) {
  $('#app').load(`/views${path}.html`);
}

function loadHomeView(ctx, next) {
  loadView('/home');
  next(); // llama al siguiente middleware
}

function loadAboutView(ctx, next) {
  loadView('/about');
  next();
}

function postLoadHook(ctx) {
  console.log('Vista renderizada');
  // lógica post-view, como iniciar componentes o logs
}

// Rutas
page('/', loadHomeView, postLoadHook);
page('/acerca', loadAboutView, postLoadHook);

// SPA navegación sin recarga
$(document).on('click', 'a[data-link]', function (e) {
  e.preventDefault();
  page.show($(this).attr('href'));
});

page();
