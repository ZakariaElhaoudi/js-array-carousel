/*Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
Al click dell’utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.*/

// variabili globali 
 const topArrow = document.querySelector('.top-arrow')
 const bottomArrow = document.querySelector('.bottom-arrow')
 const container =document.getElementById("list-item")
 let immagineAttiva = 0;
// creazione dell’array 
const immagini = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
  ];
  console.log(immagini);
  
// ciclo creazione div 
  for(let i = 0; i < immagini.length; i++){
    
    const item = `<div class="square ${immagini[i]}"><img src="${immagini[i]}"></div>`;
    
    container.innerHTML += item;
    
    console.log(item);
}

const items = container.querySelectorAll('.square');
        
items[immagineAttiva].classList.add('active');  
        


  
  topArrow.addEventListener('click',
     function () { 
            
      const items = container.querySelectorAll('.square');
        
      items[immagineAttiva].classList.remove('active');
        
      immagineAttiva++;
        
      if (immagineAttiva >= immagini.length) {
        immagineAttiva = 0;
        
      }
        
      items[immagineAttiva].classList.add('active');


    }
  )

  bottomArrow.addEventListener('click',
  function () { 
         
   const items = container.querySelectorAll('.square');
     
   items[immagineAttiva].classList.remove('active');
     
   immagineAttiva++;
     
   if (immagineAttiva >= immagini.length) {
     immagineAttiva = 0;
     
   }
     
   items[immagineAttiva].classList.add('active');


 }
)