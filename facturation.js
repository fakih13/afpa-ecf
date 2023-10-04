const container = document.getElementById('container');
let error = document.getElementById('error');
let same = document.getElementById('same');
let adressIsSame = true;
let BtoC = true;
let delivery = document.getElementById('delivery');
const adresseLivraison = document.getElementById('ship');
const villeLivraison = document.getElementById('city');
const postalLivraison = document.getElementById('postal');
const telephone = document.getElementById('telephone');
const facturation = document.getElementById('facturation');
let facturationCity = document.getElementById('facturationCity');
let facturationPostal = document.getElementById('facturationPostal');
let facturationAdresse = document.getElementById('facturationAdresse');
const identification = document.getElementById('identificationContainer');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const nomPro = document.getElementById('nomPro');
const siret = document.getElementById('siret');
const pro = document.getElementById('pro');
const society = document.getElementById('society');
/* fonction pour les checkbox */
function checked(isChecked, visibility, right) {
  if (isChecked == true) {
    //visibility.style.display = 'flex';
    visibility.classList.toggle('visibility');
    right = false;
  } else {
    //visibility.style.display = 'none';
    visibility.classList.toggle('visibility');
    right = true;
  }
  console.log(right);
  return right;
}
same.addEventListener('change', function () {
  checked(same.checked, facturation, adressIsSame);
});
society.addEventListener('change', function () {
  checked(society.checked, pro, BtoC);
});

function regexControle(value, regex) {
  if (regex.test(value)) {
    return true;
  } else {
    return false;
  }
}

/* fonction executée lors de la validation */
function validationFacturation(adressIsSame) {
  let inputsNonVides = true;
  let inputsValueValide = true;
  if (adressIsSame == true) {
    facturationCity.value = villeLivraison.value;
    facturationAdresse.value = adresseLivraison.value;
    facturationPostal.value = postalLivraison.value;
  }
  if ((BtoC = true)) {
    nomPro.value = 'Non';
    siret.value = 0;
  }
  if (container) {
    // verifie si les inputs sont vides
    let inputs = container.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      if (input.value === '') {
        input.classList.add('invalid');
        inputsNonVides = false;
      } else {
        if (input.id == 'telephone') {
          let regexTelephone = /^(0[1-7])[0-9]{8}$/;
          if (!regexControle(input.value, regexTelephone)) {
            console.log('numéro invalide');
            inputsValueValide = false;
            input.classList.add('invalid');
          }
        }
        if (input.id == 'nom') {
          let regexNom = /^[a-zA-Z]{2,}$/;
          if (!regexControle(input.value, regexNom)) {
            console.log('invalide ' + input.id);
            inputsValueValide = false;
          }
        }
        if (input.id == 'prenom') {
          let regexPrenom = /^[a-zA-Z]{2,}$/;
          if (!regexControle(input.value, regexPrenom)) {
            console.log('invalide ' + input.id);
            inputsValueValide = false;
          }
        }
        if (input.id == 'ville') {
          let regexVille = /^[a-zA-Z]{2,}$/;
          if (!regexControle(input.value, regexVille)) {
            console.log('invalide ' + input.id);
            inputsValueValide = false;
          }
        }
        if (input.id == 'postal') {
          let regexPostal = /^(0[1-9]|[1-9][0-9])\d{3}$/;
          if (!regexControle(input.value, regexPostal)) {
            console.log('invalide ' + input.id);
            inputsValueValide = false;
          }
        }
        if (input.id == 'facturationPostal') {
          let regexFacturationPostal = /^(0[1-9]|[1-9][0-9])\d{3}$/;
          if (!regexControle(input.value, regexFacturationPostal)) {
            console.log('invalide ' + input.id);
            inputsValueValide = false;
          }
        }
        if (input.id == 'facturationCity') {
          let regexFacturationCity = /^[a-zA-Z]{2,}$/;
          if (!regexControle(input.value, regexFacturationCity)) {
            console.log('invalide ' + input.id);
            inputsValueValide = false;
          }
        }
        if (input.classList.contains('invalid')) {
          input.classList.remove('invalid');
        }
      }
    }
    error.textContent += inputsNonVides
      ? ''
      : 'Veuillez remplir tous les champs';
    console.log(inputsNonVides && inputsValueValide);
  }
  if (inputsNonVides && inputsValueValide) {
    /* prochaine étape sauvegarde des données dans un objet facturation + redirection page paiement */
    let dataFacturation = {
      nom: nom.value,
      prenom: prenom.value,
      siret: siret.value,
      nomPro: nomPro.value,
      adresseLivraison: adresseLivraison.value,
      villeLivraison: villeLivraison.value,
      codePostaleLivraison: postalLivraison.value,
      adresseFacturation: facturationAdresse.value,
      villeFacturation: facturationCity.value,
      codePostaleFacturation: facturationPostal.value,
      telephone: telephone.value,
    };
    sessionStorage.setItem('dataFacturation', JSON.stringify(dataFacturation));
    //console.log(JSON.parse(sessionStorage.dataFacturation));
    console.log(inputsNonVides && inputsValueValide);
    window.location.href = 'paiement.html';
  }
}

let validation = document.getElementById('validation');

validation.addEventListener('click', () => {
  validationFacturation(adressIsSame);
});
