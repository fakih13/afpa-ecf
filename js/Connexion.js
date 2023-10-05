export class Connexion {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  /* fonction test en attendant le back-end */
  connexionTest = function () {
    if (!window.sessionStorage.getItem('user')) {
      const user = [];
      window.sessionStorage.setItem('user', JSON.stringify(user));
    }
    const user = window.sessionStorage.getItem('user');
    let getUser = JSON.parse(user);
    console.log(getUser);
    let indexEmail = getUser.findIndex((e) => e.email == this.email.value);
    let indexPassword = getUser.findIndex(
      (e) => e.password == this.password.value
    );
    console.log(indexPassword);
    if (indexEmail !== -1 && indexPassword !== -1) {
      window.sessionStorage.setItem('connect', 'true');
      window.sessionStorage.setItem('email', this.email.value)
      window.location.href = 'profil.html';
    } else {
      alert('utilisateur introuvable')
      window.location.href = 'inscription.html';
    }
  };
}