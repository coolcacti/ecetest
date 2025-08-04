function toggleTheme() {
  var isLight = localStorage.getItem('isLight');

  if (isLight === null) {
    isLight = 'true';
    localStorage.setItem('isLight', 'true');
  }

  if (isLight === 'true') {
    document.body.classList.toggle('dark');
    localStorage.setItem('isLight', 'false');
  }
  else {
    document.body.classList.toggle('light');
    localStorage.setItem('isLight', 'true');
  }
}

document.querySelector('.toggle-theme').addEventListener('click', () => {
  toggleTheme(); 
})