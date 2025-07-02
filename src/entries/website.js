import $ from 'jquery';
import page from 'page';
import { Carousel } from 'bootstrap';

const loadView = (path) => {
  $('#app').load(`/views${path}.html`);
}

const setPageTitle = (newTitle) => {
  if (typeof newTitle === 'string') {
    document.title = newTitle;
  }
}

const loadHomeView = (ctx, next) => {
  loadView('/home');
  next(); // llama al siguiente middleware
}

const loadAboutView = (ctx, next) => {
  loadView('/about');
  next();
}

const homeView = (ctx) => {
  console.log('Vista renderizada home');
  setPageTitle('Bienvenido a mi Sitio Web');
  const carouselElement = document.querySelector('#homeCarousel');
  const carousel = new bootstrap.Carousel(carouselElement, {
    interval: 3000,
    ride: 'carousel'
  });
}

const aboutView = (ctx) => {
  console.log('Vista renderizada acerca de');
  setPageTitle('Conócemos');
}

// Rutas
page('/', loadHomeView, homeView);
page('/acerca', loadAboutView, aboutView);

// SPA navegación sin recarga
$(document).on('click', 'a[data-link]', function (e) {
  e.preventDefault();
  page.show($(this).attr('href'));
});

page();
