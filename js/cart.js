export class Panier {
  constructor(panier) {
    this.panier = panier;
  }
  panierExist = function () {
    if (!window.sessionStorage.getItem(this.panier)) {
      const newPanier = [];
      window.sessionStorage.setItem('panier', JSON.stringify(newPanier));
      this.panier = newPanier;
      return this.newPanier;
    } else {
      this.panier = window.sessionStorage.getItem(this.panier);
      return this.panier;
    }
  };
  deletePanier = function () {
    if (!window.sessionStorage.getItem(this.panier))
      window.sessionStorage.removeItem(this.panier);
  };
}