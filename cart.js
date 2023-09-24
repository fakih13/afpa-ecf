/**
 * Créer dans le local storage un objet panier
 *
 *
 */

// window.localStorage.setItem('panier', JSON.stringify(panier));

if (!window.localStorage.getItem('panier')) {
  const panier = {
    produit: [],
  };
  window.localStorage.setItem('panier', JSON.stringify(panier));
}
