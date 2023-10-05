class Inscription {
  constructor(nom, prenom, email, password) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.password = password;
  }
  createUser = function () {};
  /* Pour tester l'inscription en attendant de connecter le back-end */
  createUserTest = function () {
    const newUser = {
      nom: this.nom.value,
      prenom: this.prenom.value,
      email: this.email.value,
      password: this.password.value,
    };
    if (!window.sessionStorage.getItem('user')) {
        const user = []
        window.sessionStorage.setItem('user', JSON.stringify(user));
    }
    const user = window.sessionStorage.getItem('user')
        let getUser = JSON.parse(user)
        let index = getUser.findIndex((e) => e.email == newUser.email)
        if(index !== -1){
            alert('utilisateur existants')
            return
        }else{
            getUser.push(newUser)
            window.sessionStorage.setItem('user', JSON.stringify(getUser))
            window.sessionStorage.setItem('connect','true')
            window.sessionStorage.setItem('email', this.email.value)
            window.location.href = 'profil.html';
        }
    //window.sessionStorage.setItem('user', JSON.stringify(user));
  };
}

const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

const userInscription = new Inscription(nom, prenom, email, password);

const validate = document.getElementById('btnValidate');

validate.addEventListener('click', (e) => {
  e.preventDefault();
  if (password.value === password2.value) {
    userInscription.createUserTest();
  } else {
    alert('les 2 mot de passe sont différent');
  }
});
