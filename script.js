var b = prompt("Donner une valeur comprise entre 10 et 20");
if (b>=10 && b<=20) {
	text = "Bravo vous avez respecté la consigne";
} else {
	text = "Vous n'avez pas respecté la consigne";
}
document.getElementById("demo").innerHTML = text;
