// CONST
const prezzo = 0.21;
const scontoMinorenne = 20;
const scontoSenior = 40;

// let
let prezzoFinale;
let etàPasseggero = parseInt(prompt("inserici l'età del passagero"));
let distanzaPercorsa = parseInt(prompt("inserici la distanza percorsa"));
let prezzoSenzaSconto = distanzaPercorsa * prezzo;
// Condizione
if (etàPasseggero <= 18) {
  prezzoFinale =
    prezzoSenzaSconto - (prezzoSenzaSconto * scontoMinorenne) / 100;
} else if (etàPasseggero >= 65) {
  prezzoFinale = prezzoSenzaSconto - (prezzoSenzaSconto * scontoSenior) / 100;
}
console.log(prezzoFinale);
