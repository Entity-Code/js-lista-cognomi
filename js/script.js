// ARRAY LISTA COGNOMI
var listaCognome = ["barretta","tummolillo","cante","campanile","barbato","rossi","ferrari","russo","bianchi"];

// CHIEDIAMO ALL'UTENTE INPUT SUO COGNOME
var inputCognome = prompt("Inserisci il tuo cognome")

//AGGIUNGO CON PUSH IL IL COGNOME INSERITO DALL'UTENTE
listaCognome.push(inputCognome);

// ORDINO ALFABETICAMENTE LA LISTA
listaCognome.sort(confrontaS);

//FIX  ORDINAMENTO LETTERE MAIUSCOLE MISTE A LETTERE MINUSCOLE
function confrontaS(a,b) {
  minA = a.toLowerCase();
  minB = b.toLowerCase();
  if (minA < minB) { return -1; }
      else {
         if (minA > minB) { return 1; }
        else { return 0; }
            }
  }
  
// OUTPUT
   // STAMPO LA LISTA
   document.getElementById("lista").innerHTML = listaCognome;
   // STAMPO LA POSIZIONE DEL COGNOME INSERITO NELLA LISTA "UMANAMENTE"
   var posizione = listaCognome.indexOf(inputCognome);
   document.getElementById("posizione").innerHTML = posizione + 1;
