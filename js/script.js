
var invia = document.getElementById("invia");
invia.addEventListener("click",
	function() {
      // ARRAY LISTA COGNOMI
     var listaCognome = ["barretta","tummolillo","cante","campanile","barbato","rossi","ferrari","russo","bianchi"];

     // INPUT COGNOME UTENTE
     var inputCognome = document.getElementById("inputCognome");

     //AGGIUNGO CON PUSH IL COGNOME INSERITO DALL'UTENTE
     listaCognome.push(inputCognome.value);

     // ORDINO ALFABETICAMENTE LA LISTA
     listaCognome.sort(confrontaS);

     //FIX ORDINAMENTO LETTERE MAIUSCOLE MISTE A LETTERE MINUSCOLE
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
        // STAMPO LA LISTA NELL'UL TRAMITE DEGLI LI
        var listaCognomeli = "";
        var i = 0;
        while (i < listaCognome.length){
           var appoggio = listaCognome[i];
           listaCognomeli = listaCognomeli + "<li>" + appoggio + "</li>";
           i++;
        }


        document.getElementById("lista").innerHTML = listaCognomeli;



        // STAMPO LA POSIZIONE DEL COGNOME INSERITO NELLA LISTA "UMANAMENTE"
        var posizione = listaCognome.indexOf(inputCognome.value);
        document.getElementById("posizione").innerHTML =  "Ti trovi nella posizione numero: " + (++posizione);


      // DISPLAY ON/OFF
      // document.getElementById("risultati").reset();
      var risultati = document.getElementById("risultati");
      risultati.className = "dBlock";
	}
);
