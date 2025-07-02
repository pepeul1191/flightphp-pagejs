export const setPageTitle = (newTitle) => {
  if (typeof newTitle === 'string') {
    document.title = newTitle;
  }
};