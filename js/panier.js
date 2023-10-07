// faire une boucle des produit dans le sessionStroge pour afficher les informations

function produit(img, h3, price, theQuantity,lien) {
  let containerPanier = document.getElementById('containerPanier');
  let containerProduct = document.createElement('a');
  containerProduct.setAttribute('href', lien)
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
  let deleteProduct = document.createElement('button');
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

function panierVide() {
  const main = document.getElementById('pagePanier');
  const p = document.createElement('p');
  p.setAttribute('id', 'emptyCart');
  p.textContent = 'Votre panier est vide';
  main.appendChild(p);
  container.style.display = 'none';
  console.log(panier.length)
}

function getPanier() {
  const container = document.getElementById('container');
  if (panier.length !== 0) {
    container.style.display = 'block';
    prixDuPanier(panier);
    for (let i = 0; i < panier.length; i++) {
      produit(panier[i].img, panier[i].nom, panier[i].prix, panier[i].quantité, panier[i].lien);
    }
  } else {
    panierVide();
  }
}

// faire une fonction pour supprmier un produit du panier

function attachDeleteEventListeners() {
  let containerPanier = document.getElementById('containerPanier');

  containerPanier.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
      event.preventDefault();
      let productName;
      let removeProduct = event.target.closest('.containerProduct');
      let deleteProductName = removeProduct.getElementsByTagName('h3');
      for (let i = 0; i < deleteProductName.length; i++) {
        productName = deleteProductName[i].textContent;
      }
      let index = panier.findIndex((e) => e.nom == productName);
      if (index !== -1) {
        panier.splice(index, 1);
        removeProduct.remove();
        prixDuPanier(panier);
        window.sessionStorage.setItem('panier', JSON.stringify(panier));
      }
      if (panier.length == 0) {
        panierVide()
      }
    }
  });
}

getPanier();
attachDeleteEventListeners();
