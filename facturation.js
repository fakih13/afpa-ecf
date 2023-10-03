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
    visibility.style.display = 'flex';
    right = false;
  } else {
    visibility.style.display = 'none';
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

/* fonction executée lors de la validation */
function validationFacturation(adressIsSame) {
  let inputsNonVides = true;
  if (adressIsSame == true) {
    facturationCity.value = villeLivraison.value;
    facturationAdresse.value = adresseLivraison.value;
    facturationPostal.value = postalLivraison.value;
    console.log(facturationCity +' '+ facturationAdresse+' '+facturationPostal)
  }
  if ((BtoC = true)) {
    nomPro.value = 'Non';
    siret.value = 0;
  }
  if (container) {
    let inputs = container.getElementsByTagName('input');
    for (let i = 0; i < inputs.length; i++) {
      let input = inputs[i];
      if (input.value === '') {
        input.style.border = '2px solid red';
        inputsNonVides = false;
        console.log('cest lui ' + input.id)
      } else {
        input.style.border = '';
      }
    }
    error.textContent = inputsNonVides
      ? ''
      : 'Veuillez remplir tous les champs';
  }
  if (inputsNonVides) {
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
    console.log(JSON.parse(sessionStorage.dataFacturation));
    window.location.href = "paiement.html"
  }
}

let validation = document.getElementById('validation');

validation.addEventListener('click', () => {
  validationFacturation(adressIsSame);
});
