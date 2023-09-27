/**
 * Créer dans le local storage un objet panier
 *
 *
 */

// window.localStorage.setItem('panier', JSON.stringify(panier));



let thePanier = function(){
  this.panierExist = function() {
    if (!window.localStorage.getItem('panier')) {
      const panier = [];
      window.localStorage.setItem('panier', JSON.stringify(panier));
      console.log('création')
    } else {
      const panier = window.localStorage.getItem('panier');
      console.log('exist')
    }
  }
}





let recupPanier = new thePanier()

recupPanier.panierExist()