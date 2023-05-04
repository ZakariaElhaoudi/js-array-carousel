/*Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.*/

// variabili globali 
 const rightArrow = document.querySelector('.right-arrow')
 const container =document.getElementById("list-item")
 let  esitoImmagine = "";
// creazione dell’array 
const immagini = [
    "../img/01.webp",
    "../img/02.webp",
    "../img/03.webp",
    "../img/04.webp",
    "../img/05.webp",
  ];
  console.log(immagini);

  let immagineAttiva = 0;
 
  
  rightArrow.addEventListener('click',
     function () { 
        for (let index = 0; index < immagini.length; index++) {
            const numImmagine = immagineAttiva++;
             container.innerHTML = `<div class="square">${immagineAttiva}</div>`;
            
        }
      


    }
  )