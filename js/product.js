let nameProdcut = document.getElementById('nameProduct').textContent;

let priceProduct = Number(document.getElementById('priceProduct').textContent);
// Gestion quantité

let quantity = document.getElementById('QuantityNumber');

let quantityNumber = Number(quantity.textContent);

let stock = document.getElementById('stock').textContent;

let lessQuantity = document.getElementById('lessQuantity');
let moreQuantity = document.getElementById('moreQuantity');

const imgProduit = document.getElementById('imgProduit').getAttribute('src');

moreQuantity.addEventListener('click', () => {
  if (quantityNumber < stock) {
    let plus = 1 + quantityNumber++;
    quantity.innerHTML = plus;
    return quantityNumber;
  }
});

lessQuantity.addEventListener('click', () => {
  if (quantityNumber > 1) {
    let moins = quantityNumber-- - 1;
    quantity.innerHTML = moins;
  }
});

// Ajout Panier

let produit = {
  nom: nameProdcut,
  quantité: quantityNumber,
  img: imgProduit,
  lien: window.location.href,
  prix: 0,
};

let buttonPanier = document.getElementById('ajoutPanier');

let panier = window.sessionStorage.getItem('panier');
let vPanier = JSON.parse(panier);

function succesAddProduct(nom, prix, quantité, img) {
  let modal = document.createElement('div');
  modal.setAttribute('id', 'modal');

  // container du contenu de la modal
  let modalContent = document.createElement('div');
  modalContent.setAttribute('id', 'modalContent');

  // contenue
  let sucessMessage = document.createElement('h4');
  sucessMessage.setAttribute('id', 'modalMessage');
  sucessMessage.textContent = 'Ajouté au panier';

  let nameModal = document.createElement('p');
  nameModal.setAttribute('id', 'modalName');
  nameModal.textContent = nom;
  modalContent.appendChild(nameModal);

  let imgModal = document.createElement('img');
  imgModal.setAttribute('src', img);
  imgModal.setAttribute('alt', nom);
  imgModal.setAttribute('id', 'imgModal');
  modalContent.appendChild(imgModal);

  let prixModal = document.createElement('p');
  prixModal.setAttribute('id', 'modalPrix');
  prixModal.textContent = 'prix total : ' + prix + '€';
  modalContent.appendChild(prixModal);

  let quantitéModal = document.createElement('p');
  quantitéModal.setAttribute('id', 'modalQuantite');
  quantitéModal.textContent = 'quantité :' + quantité;
  modalContent.appendChild(quantitéModal);

  let buttonGoCart = document.createElement('a');
  buttonGoCart.setAttribute('id', 'ButtonGoCart');
  buttonGoCart.setAttribute('href', '/panier.html');
  buttonGoCart.textContent = 'Aller au panier';
  modalContent.appendChild(buttonGoCart);

  modal.appendChild(modalContent);

  const main = document.getElementsByTagName('main');

  for (let i = 0; i < main.length; i++) {
    main[i].appendChild(modal);
  }
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.remove();
}

document.addEventListener('click', (event) => {
  if (document.getElementById('modal')) {
    if (event.target === modal) {
      console.log('oh clique');
      closeModal(); // Fermer la modal si on a cliqué sur la modal elle-même
    }
  }
});

// ajout dans l'objet panier du produit et de la quantité
buttonPanier.addEventListener('click', () => {
  produit.quantité = quantityNumber;
  produit.prix = priceProduct * quantityNumber;
  let index = vPanier.findIndex((e) => e.nom == produit.nom);
  // si le produit est dèjà présent faire un update
  if (index !== -1) {
    vPanier[index].quantité = produit.quantité;
    vPanier[index].prix = produit.prix;
  } else {
    vPanier.push(produit);
  }
  sessionStorage.setItem('panier', JSON.stringify(vPanier));
  succesAddProduct(produit.nom, produit.prix, produit.quantité, produit.img);
  //alert('produit ajouté dans le panier')
  //window.location.href = '/panier.html';
});
