// 1. definisco le variabili che andremop ad utilizzare nel nostro programma
var calcolo = document.getElementById('calcola');
// console.log(calcolo);

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
      for ( var i = 0; i < aggiuntaIngrediente.length; i++) {
        

        }

      }
    } else {
      alert('inserisci il nome del panino');
    }

  }

);
