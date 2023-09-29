class Panier{
  constructor(panier){
    this.panier = panier
  }
  panierExist = function() {
    if (!window.localStorage.getItem(this.panier)) {
      const newPanier = [];
      window.localStorage.setItem('panier', JSON.stringify(newPanier));
      console.log(newPanier)
      this.panier = newPanier
      return this.newPanier
    } else {
      this.panier = window.localStorage.getItem(this.panier);
      console.log(this.panier)
      return this.panier
    }
  }
  deletePanier = function() {
    if (!window.localStorage.getItem(this.panier)) window.localStorage.removeItem(this.panier)
  }
}

const recup = 'panier'

const thePanier = new Panier(recup)

thePanier.panierExist()