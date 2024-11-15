//étape 1 
//Faire une fonction qui prend en paramètre le
//nombre d'allumettes à enlever du reste

//au départ il y a 50 allumettes dans le tas
let TasAllumette = 50

//je crée ma fonction qui retire 1 à 6 allumettes
//du paquet de 50
function RetireNombreAllumette() {

    //message pour le prompt demande combien enlever
    let enleveAllumette =
        ParseInt(prompt("donne moi un nombre entre 1 et 6"));


    //enlever des allumettes à mon tas de 50
    //si je retire entre 1 à 6 allumettes
    if (enleveAllumette < 1 || enleveAllumette > 6) {
        alert("erreur: entrer un nombre entre 1 et 6");
        //retourne le tas inchangé
        return;
    }
    if (enleveAllumette > TasAllumette) {
        // je lui enleve les allumettes du tas
        alert("erreur vous ne pouvez pas plus d'allumettes que disponible");
        return// sortir de la fonction si l'entrée invalide
    }
        //calcul pour enlever allumettes du joueur
        //soustrait nb allumettes choisies du tas
        TasAllumette -= enleveAllumette;

        //affiche combien d'allumette sont enlvées
        console.log("vous avez retirez" +
             enleveAllumette + "allumette");

        //affiche le nombre d'allumettes restantes
        console.log("reste" + TasAllumette + "allumettes");
    

    
    //boucle de jeu qui appelle la fonction 
    //tant qu'il y des allumettes 
    while (TasAllumette > 0) {
        //j'appelle la fonction pour retirer allumette
        RetireNombreAllumette();
    }
}

RetireNombreAllumette();
// mot de fin de jeu
alert("jeu términé! plus d'allumettes");
