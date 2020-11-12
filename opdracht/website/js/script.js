let bezoeker = {
	voornaam: prompt("Vul hier je voornaam"),
	achternaam: prompt("Vul hier je achternaam"),
	email: prompt("Vul hier je email"),
	leeftijd: prompt("Vul hier je leeftijd"),
	woonplaats: prompt("Vul hier je woonplaats"),
	CodeSkill: prompt("Wat voor cijfer op een schaal van 1 tot 10 zou je jouw skills voor HTML, CSS en JavaScript geven?")
};

let achtergrondKleur = document.querySelector("body");

let naamLetter = bezoeker.voornaam.charCodeAt(0);
let achternaamLetter = bezoeker.achternaam.charCodeAt(0);



if (bezoeker.leeftijd == 16) {
	achtergrondKleur.style.backgroundColor = "orange";
} else if (bezoeker.leeftijd == 17) {
	achtergrondKleur.style.backgroundColor = "gold";
} else if (bezoeker.leeftijd == 18) {
	achtergrondKleur.style.backgroundColor = "#1c4966";
} else if (bezoeker.leeftijd == 19) {
	achtergrondKleur.style.backgroundColor = "#00ff00";
} else {
	achtergrondKleur.style.backgroundColor = "rgb(" + achternaamLetter + "," + bezoeker.leeftijd + "," + naamLetter + ")";
}

/** tabel **/

let tabelVNaam = document.getElementById("v-naam").innerHTML = bezoeker.voornaam;
let tabelANaam = document.getElementById("a-naam").innerHTML = bezoeker.achternaam;
let tabelScore = document.getElementById("score").innerHTML = bezoeker.CodeSkill;
