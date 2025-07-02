import { loadView } from '../utils/loadView.js';
import { setPageTitle } from '../utils/setTitle.js';
import { setNav } from '../utils/setNav.js';

export const loadAboutView = (ctx, next) => {
  loadView('/about', () => {
    setNav('/acerca');
    aboutView();
    next();
  });
};

export const aboutView = () => {
  console.log('Vista renderizada acerca de');
  setPageTitle('Conócenos');
};