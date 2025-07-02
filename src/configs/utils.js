import $ from 'jquery';

function loadView(path) {
  $('#app').load(`/views${path}.html`);
}

function setTitle(title) {
  document.title = title;
}

function showError(message) {
  $('#app').html(`<div class="error">${message}</div>`);
}

export { loadView, setTitle, showError };
