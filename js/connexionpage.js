import { Connexion } from './Connexion.js';

const email = document.getElementById('email');
const password = document.getElementById('password');

const validate = document.getElementById('btnValidate');

const theConnexion = new Connexion(email, password);

validate.addEventListener('click', (e) => {
  e.preventDefault();
  theConnexion.connexionTest();
  console.log(email.value, password.value);
});