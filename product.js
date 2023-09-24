let nameProdcut = document.getElementById('nameProduct').textContent;

// Gestion quantité

let quantity = document.getElementById('QuantityNumber');

let quantityNumber = Number(quantity.textContent);

let stock = document.getElementById('stock').textContent;

let lessQuantity = document.getElementById('lessQuantity');
let moreQuantity = document.getElementById('moreQuantity');

console.log(quantityNumber)
console.log(stock)

moreQuantity.addEventListener('click', () => {
  if (quantityNumber < stock) {
    let plus = 1+ quantityNumber++;
    quantity.innerHTML = plus;
    return quantityNumber
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
  if (!vPanier.produit.includes(produit)) {
    vPanier.produit.push(produit);
  }
  
  // créer un objet du produit avec le nom et la quantité et ajouter dans le tableau produit du panier
  console.log(vPanier.produit);
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