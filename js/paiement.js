const sessionPanier = window.sessionStorage.getItem('panier');
let panier = JSON.parse(sessionPanier);




if (panier.length > 0) {
    const paiementPage = document.getElementById('paiementPage')
    paiementPage.style.display = 'block'
  let valueTotal = 0;

  const commande = document.getElementById('commande');

  for (let i = 0; i < panier.length; i++) {
    valueTotal += panier[i].prix;
    let containerProduct = document.createElement('div');
    containerProduct.classList.add('containerProduct');

    let imgProduct = document.createElement('img');
    imgProduct.setAttribute('src', panier[i].img);
    imgProduct.setAttribute('alt', panier[i].nom);
    imgProduct.setAttribute('id', 'imgProduct');
    containerProduct.appendChild(imgProduct);

    let containerInfo = document.createElement('div');
    containerInfo.classList.add('containerInfo');
    containerProduct.appendChild(containerInfo);

    let info = document.createElement('div');
    info.classList.add('info');
    containerInfo.appendChild(info);

    let nameProduct = document.createElement('h3');
    nameProduct.setAttribute('id', 'nameProduct');
    nameProduct.textContent = panier[i].nom;
    info.appendChild(nameProduct);

    let priceProduct = document.createElement('span');
    priceProduct.setAttribute('id', 'priceProduct');
    priceProduct.textContent = panier[i].prix + '€';
    info.appendChild(priceProduct);

    let quantity = document.createElement('div');
    quantity.classList.add('quantity');
    containerInfo.appendChild(quantity);

    let quantityContainer = document.createElement('div');
    quantityContainer.classList.add('quantityContainer');
    quantity.appendChild(quantityContainer);

    let p = document.createElement('p');
    p.textContent = 'Quantité :';
    quantityContainer.appendChild(p);

    let quantityProduct = document.createElement('span');
    quantityProduct.setAttribute('id', 'quantityProduct');
    quantityProduct.textContent = panier[i].quantité;
    quantityContainer.appendChild(quantityProduct);

    commande.after(containerProduct);
  }

  let prixTotal = document.getElementById('prixTotal');
  prixTotal.textContent = valueTotal;
}else{
    window.location.href = "index.html"
}
