class Panier{
  constructor(panier){
    this.panier = panier
  }
  panierExist = function() {
    if (!window.sessionStorage.getItem(this.panier)) {
      const newPanier = [];
      window.sessionStorage.setItem('panier', JSON.stringify(newPanier));
      console.log(newPanier)
      this.panier = newPanier
      return this.newPanier
    } else {
      this.panier = window.sessionStorage.getItem(this.panier);
      console.log(this.panier)
      return this.panier
    }
  }
  deletePanier = function() {
    if (!window.sessionStorage.getItem(this.panier)) window.sessionStorage.removeItem(this.panier)
  }
}

const recup = 'panier'

const thePanier = new Panier(recup)

thePanier.panierExist()