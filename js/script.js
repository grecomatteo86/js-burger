// 1. definisco le variabili che andremop ad utilizzare nel nostro programma
var calcolo = document.getElementById('calcola');
// console.log(calcolo);
/* 7. vado a controllare i coupons: creo un array */
var coupons = ['1234','2341','3412','4123'];

//2. aggiungo l'evento al click del bottone
calcolo.addEventListener('click',

  function(){

    // alert('bravo, il click funziona');

    /*3. controllo se il nome del panino è stato inserito
    (dobbiamo andarci a leggere l'input 29)*/
    var nomePanino = document.getElementById('nome_panino');
    /* di questo input devo andare a controllare il value
    console.log(nomePanino.value);*/
    /*4. eseguo il controllo:
    se il valore del nome_panino è diverso da una stringa vuota allora voglio vederne il valore;
    altrimenti compare un messaggio che mi chiede di inserire il nome del panino*/
    if (nomePanino.value != '') {
      /* console.log(nomePanino.value);
      5. ad ogni click devo andare a scorrere tutte le checkbox
      per vedere se sono checkate o no;
      per far questo vado a prendere tutte le checkbox attraverso la classe
      mi faccio restituire l'array
      e lo vado a ciclare*/
      var aggiuntaIngrediente = document.getElementsByClassName('aggiunta_ingrediente');
      console.log(aggiuntaIngrediente);
      var somma = 50;
      for ( var i = 0; i < aggiuntaIngrediente.length; i++) {
        //6. se l'ingrediente è checkato, prendo il suo value e lo vado a sommare al costo del panino
        if (aggiuntaIngrediente[i].checked) {
          somma += parseInt(aggiuntaIngrediente[i].value); //value restitutisce una stringa, ecco perche richiede il parseInt
        }
      }
      /* 8. applico l'eventuale sconto:
      vado a leggere quello che scrive l'utente a riga 85 dell'html e lo salvo in una var
      e faccio il controllo: se l'array include il value inserito dall'utente, applico il 20% di sconto */
      var coupon = document.getElementById('coupon');
      if ( coupons.includes(coupon.value) ) {
        somma -= somma * 0.2;

      }
      /* console.log(somma);
      6. stampa del risultato nella pagina:
      vado ad inserire la variabile somma nell'html */
      document.getElementById('cifra_totale').innerHTML= somma + ' €';
    } else {
      alert('inserisci il nome del panino');
    }
  }
);
