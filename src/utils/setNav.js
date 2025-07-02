import $ from 'jquery';

export const setNav = (href) => {
  // Quitar la clase 'active' de todos los enlaces
  $('a[data-link]').removeClass('active');
  // Buscar el enlace que coincida con el href y marcarlo como activo
  $(`a[data-link][href="${href}"]`).addClass('active');
};