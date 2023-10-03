let same = document.getElementById('same');
let delivery = document.getElementById('delivery');
const facturation = document.getElementById('facturation');
let facturationCity = document.getElementById('facturationCity');
let facturationPostal = document.getElementById('facturationPostal');
let facturationAdresse = document.getElementById('facturationAdresse');
function sameAdress() {
  if (same.checked == true) {
    facturation.style.display = 'flex'
    // if (delivery) {
    //   const inputs = delivery.getElementsByTagName('input');
    //   const inputNonVides = true;
    //   for (let i = 0; i < inputs.length; i++) {
    //     let input = inputs[i];
    //     if (input.value === '') {
    //       alert("veuillez remplir tout les champs de l'adresse de livraison")
    //       console.log(same.checked)
    //     }else{
    //       input.style.border = '2px solid green'
    //     }
    //   }
    //   if (inputNonVides) {
    //     let shipAdresse = document.getElementById('ship');
    //     let city = document.getElementById('city');
    //     let postal = document.getElementById('postal');
    //     facturationAdresse.value = shipAdresse.value;
    //     facturationCity.value = city.value;
    //     facturationPostal.value = postal.value;
    //     facturation.style.display = 'none';
    //   } else {
    //     facturation.style.display = 'flex';
    //   }
    // }
  }
}

const identification = document.getElementById('identificationContainer');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');

const pro = document.getElementById('pro');

const society = document.getElementById('society');

function proIdentification() {
  if (society.checked == true) {
    pro.style.display = 'flex';
  } else {
    pro.style.display = 'none';
  }
}

same.addEventListener('change', sameAdress);
society.addEventListener('change', proIdentification);
