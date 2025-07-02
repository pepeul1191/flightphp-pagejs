import $ from 'jquery';
import { Carousel } from 'bootstrap';
import { loadView } from '../utils/loadView.js';
import { setPageTitle } from '../utils/setTitle.js';
import { setNav } from '../utils/setNav.js';

export const loadHomeView = (ctx, next) => {
  loadView('/home', () => {
    setNav('/');
    homeView();
    next();
  });
};

export const homeView = () => {
  console.log('Vista renderizada home');
  setPageTitle('Bienvenido a mi Sitio Web');

  const carouselElement = $('#homeCarousel');
  if (carouselElement) {
    new Carousel(carouselElement, {
      interval: 3000,
      ride: 'carousel'
    });
  }
};