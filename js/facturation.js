class Facturation {
  constructor() {
    this.error = document.getElementById('error');
    this.container = document.getElementById('container');
    this.nom = document.getElementById('nom');
    this.prenom = document.getElementById('prenom');
    this.nomPro = document.getElementById('nomPro');
    this.siret = document.getElementById('siret');
    this.adresseLivraison = document.getElementById('ship');
    this.villeLivraison = document.getElementById('city');
    this.postalLivraison = document.getElementById('postal');
    this.telephone = document.getElementById('telephone');
    this.facturationCity = document.getElementById('facturationCity');
    this.facturationPostal = document.getElementById('facturationPostal');
    this.facturationAdresse = document.getElementById('facturationAdresse');
    this.BtoB = true;
    this.adressIsSame = true;
  }
  checked(isChecked, visibility, options) {
    if (isChecked === true) {
      //visibility.style.display = 'flex';
      visibility.classList.toggle('visibility');
      options.right = false;
      console.log('changement devient ' + options.right);
    } else {
      //visibility.style.display = 'none';
      visibility.classList.toggle('visibility');
      options.adressFacturation = options.deliveryAdress;
      options.right = true;
      console.log('renouveau ' + options.right);
    }
    console.log(options.right);
    return options.right;
  }

  regexControle = function (value, regex) {
    if (regex.test(value)) {
      return true;
    } else {
      return false;
    }
  };

  validationFacturation = function () {
    let inputsNonVides = true;
    let inputsValueValide = true;
    if (this.adressIsSame == true) {
      this.facturationCity.value = this.villeLivraison.value;
      this.facturationAdresse.value = this.adresseLivraison.value;
      this.facturationPostal.value = this.postalLivraison.value;
    }
    if ((this.BtoB = true)) {
      this.nomPro.value = 'Non';
      this.siret.value = 0;
    }
    if (this.container) {
      // verifie si les inputs sont vides
      let inputs = container.getElementsByTagName('input');
      let errorMessages = '';
      for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        if (input.value === '') {
          input.classList.add('invalid');
          inputsNonVides = false;
        } else {
          if (input.id == 'telephone') {
            let regexTelephone = /^(0[1-7])[0-9]{8}$/;
            if (!this.regexControle(input.value, regexTelephone)) {
              console.log('numéro invalide');
              inputsValueValide = false;
              input.classList.add('invalid');
              errorMessages += 'Saissez un numèro de téléphone valide\n';
            }
          }
          if (input.id == 'nom') {
            let regexNom = /^[a-zA-Z]{2,}$/;
            if (!this.regexControle(input.value, regexNom)) {
              console.log('invalide ' + input.id);
              inputsValueValide = false;
              errorMessages += 'Saissez un nom valide\n';
            }
          }
          if (input.id == 'prenom') {
            let regexPrenom = /^[a-zA-Z]{2,}$/;
            if (!this.regexControle(input.value, regexPrenom)) {
              console.log('invalide ' + input.id);
              inputsValueValide = false;
              errorMessages += 'Saissez un prénom valide\n';
            }
          }
          if (input.id == 'ville') {
            let regexVille = /^[a-zA-Z]{2,}$/;
            if (!this.regexControle(input.value, regexVille)) {
              console.log('invalide ' + input.id);
              inputsValueValide = false;
            }
          }
          if (input.id == 'postal') {
            let regexPostal = /^(0[1-9]|[1-9][0-9])\d{3}$/;
            if (!this.regexControle(input.value, regexPostal)) {
              console.log('invalide ' + input.id);
              inputsValueValide = false;
              errorMessages += 'Saissez un code postal valide\n';
            }
          }
          if (input.id == 'facturationPostal') {
            let regexFacturationPostal = /^(0[1-9]|[1-9][0-9])\d{3}$/;
            if (!this.regexControle(input.value, regexFacturationPostal)) {
              console.log('invalide ' + input.id);
              inputsValueValide = false;
              errorMessages += 'Saissez un code postal valide\n';
            }
          }
          if (input.id == 'facturationCity') {
            let regexFacturationCity = /^[a-zA-Z]{2,}$/;
            if (!this.regexControle(input.value, regexFacturationCity)) {
              console.log('invalide ' + input.id);
              inputsValueValide = false;
            }
          }
          if (input.classList.contains('invalid')) {
            input.classList.remove('invalid');
          }
        }
      }
      if (errorMessages !== '') {
        alert(errorMessages);
      }
      this.error.textContent = inputsNonVides
        ? ''
        : 'Veuillez remplir tous les champs';
    }
    if (inputsNonVides && inputsValueValide) {
      /* prochaine étape sauvegarde des données dans un objet facturation + redirection page paiement */
      let dataFacturation = {
        nom: this.nom.value,
        prenom: this.prenom.value,
        siret: this.siret.value,
        nomPro: this.nomPro.value,
        adresseLivraison: this.adresseLivraison.value,
        villeLivraison: this.villeLivraison.value,
        codePostaleLivraison: this.postalLivraison.value,
        adresseFacturation: this.facturationAdresse.value,
        villeFacturation: this.facturationCity.value,
        codePostaleFacturation: this.facturationPostal.value,
        telephone: this.telephone.value,
      };
      sessionStorage.setItem(
        'dataFacturation',
        JSON.stringify(dataFacturation)
      );
      console.log(inputsNonVides && inputsValueValide);
      window.location.href = 'paiement.html';
    }
  };
}
const theFacturation = new Facturation();
const same = document.getElementById('same');
const facturationContainer = document.getElementById('facturationContainer');
const optionsAdressIsSame = {
  right: theFacturation.adressIsSame,
  deliveryAdress: theFacturation.adresseLivraison,
  adressFacturation: theFacturation.adresseFacturation,
};
const adresseLivraison = theFacturation.adresseLivraison;
const facturationAdresse = theFacturation.facturationAdresse;
same.addEventListener('change', function () {
  theFacturation.checked(
    same.checked,
    facturationContainer,
    optionsAdressIsSame
  );
  theFacturation.adressIsSame = optionsAdressIsSame.right;
  theFacturation.adresseFacturation = optionsAdressIsSame.adressFacturation;
});
const society = document.getElementById('society');
const proContainer = document.getElementById('proContainer');
const BtoB = theFacturation.BtoB;
society.addEventListener('change', function () {
  theFacturation.checked(society.checked, proContainer, BtoB);
});
let validation = document.getElementById('validation');
validation.addEventListener('click', () => {
  theFacturation.validationFacturation();
});
