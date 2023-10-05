/* Test pour afficher la poage en attendant le back-end */
if (!window.sessionStorage.getItem('connect')) {
    document.location.replace("connexion.html")
}