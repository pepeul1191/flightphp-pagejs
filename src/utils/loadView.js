import $ from 'jquery';

export const loadView = (path, callback = () => {}) => {
  $('#app').load(`/views${path}.html`, callback);
};