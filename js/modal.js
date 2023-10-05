import { Connexion } from './Connexion.js';

if (!window.sessionStorage.getItem('connect')) {
  const modal = document.getElementById('myModal');
  const btn = document.getElementById('userIcon');
  const span = document.getElementsByClassName('close')[0];
  btn.onclick = function () {
    modal.style.display = 'block';
  };
  span.onclick = function () {
    modal.style.display = 'none';
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

  const email = document.getElementById('emailConnect');
  const password = document.getElementById('passwordConnect');
  const validate = document.getElementById('btnConnect');

  const theConnexion = new Connexion(email, password);

  validate.addEventListener('click', (e) => {
    e.preventDefault();
    theConnexion.connexionTest();
  });
}else{
  const userIcon =document.getElementById('userIcon')
  userIcon.addEventListener('click',()=>{
    window.location.href = '/profil.html'
  })
}
