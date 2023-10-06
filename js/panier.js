// faire une boucle des produit dans le sessionStroge pour afficher les informations

function produit(img, h3, price, theQuantity) {
  let containerPanier = document.getElementById('containerPanier');
  let containerProduct = document.createElement('div');
  containerProduct.classList.add('containerProduct');
  let imgProduct = document.createElement('img');
  imgProduct.setAttribute('src', img);
  imgProduct.setAttribute('id', 'imgProduct');
  imgProduct.setAttribute('alt', h3);
  let containerInfo = document.createElement('div');
  containerInfo.classList.add('containerInfo');
  let info = document.createElement('div');
  info.classList.add('info');
  let nameProduct = document.createElement('h3');
  nameProduct.textContent = h3;
  nameProduct.setAttribute('id', 'nameProduct');
  let priceProduct = document.createElement('span');
  priceProduct.textContent = price + '€';
  priceProduct.setAttribute('id', 'priceProduct');
  let quantity = document.createElement('div');
  quantity.classList.add('quantity');
  let quantityContainer = document.createElement('div');
  quantityContainer.classList.add('quantityContainer');
  let pQuantity = document.createElement('p');
  pQuantity.textContent = 'Quantité:';
  let quantityProduct = document.createElement('span');
  quantityProduct.textContent = theQuantity;
  quantityProduct.setAttribute('id', 'quantityProduct');
  let deleteProduct = document.createElement('a');
  deleteProduct.setAttribute('href', '#');
  deleteProduct.setAttribute('class', 'delete');
  deleteProduct.textContent = 'supprimer';

  containerProduct.appendChild(imgProduct);
  info.appendChild(nameProduct);
  info.appendChild(priceProduct);
  containerInfo.appendChild(info);
  containerInfo.appendChild(quantity);
  quantityContainer.appendChild(pQuantity);
  quantityContainer.appendChild(quantityProduct);
  quantity.appendChild(quantityContainer);
  quantity.appendChild(deleteProduct);
  containerProduct.appendChild(containerInfo);
  containerPanier.appendChild(containerProduct);
}

const img = '/images/mug-angel.png';

const sessionPanier = window.sessionStorage.getItem('panier');
let panier = JSON.parse(sessionPanier);



// faire une boucle pour calculer le prix des produit

function prixDuPanier(panier) {
  let sousTotal = document.getElementById('sousTotalValue');
  let prixHt = document.getElementById('prixHt');
  let prixTtc = document.getElementById('prixTtc');
  let value = 0;
  for (let i = 0; i < panier.length; i++) {
    value += panier[i].prix;
  }
  sousTotal.textContent = value;
  prixHt.textContent = value;
  prixTtc.textContent = value * 0.2 + value;
}

function getPanier() {
  if (panier.length !== 0) {
    /*let sousTotal = document.getElementById('sousTotalValue');
    let prixHt = document.getElementById('prixHt');
    let prixTtc = document.getElementById('prixTtc');
    let value = 0;
    for (let i = 0; i < panier.length; i++) {
      produit(img, panier[i].nom, panier[i].prix, panier[i].quantité);
      value += panier[i].prix;
    }
    sousTotal.textContent = value;
    prixHt.textContent = value;
    prixTtc.textContent = value * 0.2 + value;*/
    prixDuPanier(panier)
    for (let i = 0; i < panier.length; i++) {
      produit(img, panier[i].nom, panier[i].prix, panier[i].quantité);
    }
  } else {
    const container = document.getElementById('container');
    container.style.display = 'none';
    const main = document.getElementById('pagePanier');
    const p = document.createElement('p');
    p.setAttribute('id', 'emptyCart');
    p.textContent = 'Votre panier est vide';
    main.appendChild(p);
  }
}

getPanier();
// faire une fonction pour supprmier un produit du panier

function attachDeleteEventListeners() {
  // je récupère tout les liens pôur supprimer le produit du panier
  let deleteProduct = document.getElementsByClassName('delete');

  for (let i = 0; i < deleteProduct.length; i++) {
    deleteProduct[i].addEventListener('click', () => {
      // j'initialise la variable pour le nom du produit
      let productName;
      // je prends l'éléments parent qui tient toutes les infos du produit
      let removeProduct = deleteProduct[i].closest('.containerProduct');
      // j'initalise la variable qui va contentir le nom du produit
      let deleteProductName = removeProduct.getElementsByTagName('h3');
      for (let i = 0; i < deleteProductName.length; i++) {
        // j'attribue le nom du produit dans la variable
        productName = deleteProductName[i].textContent;
      }
      // clonne le pnaier d'origine
      let clonedPanier = [...panier];
      // je cherche par le nom le produit dans la tableau de panier cloner
      let index = clonedPanier.findIndex((e) => e.nom == productName);
      if (index !== -1) {
        // supprime
        clonedPanier.splice(index, 1);
        // supprime l'élément du dom
        removeProduct.remove();
        panier = clonedPanier; // met à jour le panier d'origine avec les nouvelles valeurs
        prixDuPanier(panier)
        window.sessionStorage.setItem('panier', JSON.stringify(panier));
      } else {
        console.log('bug ici ' + index);
      }
      console.log(panier);
      attachDeleteEventListeners();
    });
  }
}
attachDeleteEventListeners();

