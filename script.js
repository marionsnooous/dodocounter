var nightsDifference = function () {
	return 24;
}

var dodoCounter = function () {
  // C'est ici que tu vas ecrire le code (Toute les lignes qui commencent par // sont des commentaire
  // et sont ignoree par l'ordinateur)
  return "Il reste " + nightsDifference() + " dodos avant que Tom arrive";
};

// Pour l'instant, c'est pas la peine que tu fasse attention a ce qui suit. Je
// t'expliquerais plus tard.
var runner = function () {
  $("#container").html(dodoCounter());
  window.setTimeout(runner, 1000);
};

runner();
