/*
	Nouveautés :
	jQuery().on
	jQuery().val
	jQuery().append : rajout sans écraser
*/

// ETAPE 1: DECLARATION DES VARIABLES
var form 		= {};
form.somme 		= 0;	// somme a distribuer
form.nbTotalBillets = 0;

tabTypeBillet = [500, 200, 100, 50, 20, 10, 5];
tabNbBillets = [];
html = "";
// ETAPE 2: DECLARATION DES FONCTIONS
form.demarrage = function ()
{
	alert('PRET');
	// INSTALLATION DES EVENEMENTS "ON CLICK"
	jQuery(".boutonRetrait").on("click", form.retirerBillets);
};

form.retirerBillets = function ()
{
	//alert("tu as clique");
	// RECUPERER LA SOMME DEMANDEE
	form.somme = jQuery("input#retrait").val();
	//alert("MONTANT DU RETRAIT: " + form.somme);
	
	// CALCUL DU NOMBRE DE BILLETS A DISTRIBUER
	// ARRONDI A ENTIER INFERIEUR
	reste = form.somme;
	i = 0;
	while( (i < tabTypeBillet.length)&&(reste > 0) )
	{	
	  	//nbBillets = tabNbBillets[typeBillet];
		tabNbBillets[tabTypeBillet[i]] = Math.floor(reste / tabTypeBillet[i]);
		reste = form.somme % tabTypeBillet[i];
		form.somme = reste;
		//form.nbTotalBillets = form.nbTotalBillets + tabNbBillets[tabTypeBillet[i]];
		i++;
	}


	
	// EFFACER LES BILLETS
	jQuery(".resultat").html("");
	i = 0;
	while(i < tabTypeBillet.length)
	{
		compteur = 0;
		while (compteur < tabNbBillets[tabTypeBillet[i]])
		{
			// AFFICHER LES BILLETS
			html = '<img src="media/images/euros-'+tabTypeBillet[i]+'.jpg">';
			jQuery(".resultat").append(html);
			
			// AJOUTER UN AU COMPTEUR
			compteur = compteur + 1;
		}
		i++;
	}
};

// ETAPE 3: ACTIVATION DU CODE
jQuery(form.demarrage);