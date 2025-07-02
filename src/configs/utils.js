import $ from 'jquery';
import Handlebars, { template } from 'handlebars';

function loadView(path, context = {}) {
  $.get(`/views${path}.html`, function (html) {
    const $html = $(html);
    const $template = $html.filter('script[type="text/x-handlebars-template"]');
    alert();
    console.log(template)
    if ($template.length > 0) {
      const template = Handlebars.compile($template.html());
      console.log(template)
      $('#app').html(template(context));
    } else {
      $('#app').html($html);
    }
  });
}

function setTitle(title) {
  document.title = title;
}

function showError(message) {
  $('#app').html(`<div class="error">${message}</div>`);
}

export { loadView, setTitle, showError };
