import $ from 'jquery';
import page from 'page';
import { loadHomeView, homeView } from '../views/home.js';
import { loadAboutView, aboutView } from '../views/about.js';
import '../assets/website.css';

export const initRouter = () => {
  page('/', loadHomeView, homeView);
  page('/acerca', loadAboutView, aboutView);

  $(document).on('click', 'a[data-link]', function (e) {
    e.preventDefault();
    page.show($(this).attr('href'));
  });

  page();
};