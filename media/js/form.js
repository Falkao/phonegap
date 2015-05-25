// ETAPE 1: DECLARATION DES VARIABLES
// form est un objet vide qui va contenir notre code
var form 	= {};
form.texte1 = "";

// ETAPE 2: DECLARATION DES FONCTIONS
form.demarrage = function ()
{
	alert('la page est prete');
	// INSTALLER LES EVENEMENTS "ON CLICK"
	jQuery("#bouton1").on("click", form.click1);
};

form.click1 = function ()
{
	alert("tu as clique");
	// RECUPERER CE QUE LE VISITEUR A ECRIT
	form.texte1 = jQuery("input#nom").val();
	alert(form.texte1);
	// AFFICHAGE DANS LA <div id="resultat"></div>
	jQuery("#resultat1").html(form.texte1);	
};

// ETAPE 3: ACTIVATION DU CODE
// DEMANDE A JQUERY D'ACTIVER LA FONCTION form.demarrage
// SEULEMENT QUAND LA PAGE EST PRETE
jQuery(form.demarrage);
