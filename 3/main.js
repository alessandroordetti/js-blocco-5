/**
 * 
   A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

   Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */

   const randomArray = ['ALESSANDRO BELLO', 'LIVING LA VIDA LOCA', 'MANNAGGIA PAPERINO'];

   console.log(randomArray);



   const newStrings = randomArray.map((element) =>{
      return element.charAt(0).toUpperCase() +
      element.substring(1).toLowerCase();
   })

   console.table(newStrings);