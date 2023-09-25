let nameProdcut = document.getElementById('nameProduct').textContent;

let priceProduct = Number(document.getElementById('priceProduct').textContent);
// Gestion quantité

let quantity = document.getElementById('QuantityNumber');

let quantityNumber = Number(quantity.textContent);

let stock = document.getElementById('stock').textContent;

let lessQuantity = document.getElementById('lessQuantity');
let moreQuantity = document.getElementById('moreQuantity');

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
};

let buttonPanier = document.getElementById('ajoutPanier');

let panier = window.localStorage.getItem('panier');
let vPanier = JSON.parse(panier);

// ajout dans l'objet panier du produit et de la quantité
buttonPanier.addEventListener('click', () => {
  produit.quantité = quantityNumber;
  produit.prix = priceProduct * quantityNumber;
  let index = vPanier.findIndex((e) => e.nom == produit.nom);
  console.log(index);
  // si le produit est dèjà présent faire un update
  if (index !== -1) {
    vPanier[index].quantité = produit.quantité; 
  } else {
    vPanier.push(produit);
  }
  localStorage.setItem('panier', JSON.stringify(vPanier));
});

/*

moreQuantity.addEventListener('click', () => {
  let quantity = Number(QuantityNumber.textContent);
  console.log(stock);
  if (quantity < stock) {
    let plus = quantity + 1;
    quantityNumber.innerHTML = plus;
  }
});
lessQuantity.addEventListener('click', () => {
  let quantity = Number(QuantityNumber.textContent);
  if (quantity > 1) {
    let moins = quantity - 1;
    quantityNumber.innerHTML = moins;
  }
});



*/
