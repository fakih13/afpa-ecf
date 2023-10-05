const buttonMenu = document.getElementById('buttonMenu');
const listMenu = document.getElementById('listMenu');
const closeMenu = document.getElementById('closeMenu');
const user = document.getElementById('userIcon');

if (document.getElementById('sousMenu')) {
  const sousMenu = document.getElementById('sousMenu');
  sousMenu.style.display = 'none';
}

buttonMenu.addEventListener('click', () => {
  listMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  listMenu.style.display = 'none';
});

const leMenu = document.getElementById('leMenu');

leMenu.addEventListener('click', () => {
  console.log(leMenu.children);
});

if (window.sessionStorage.getItem('connect')) {
  const deconnexion = document.getElementById('deconnexion');
  deconnexion.style.display = 'inline';
  deconnexion.addEventListener('click', () => {
    window.sessionStorage.removeItem('connect');
    window.location.href = '/index.html';
  });
}
