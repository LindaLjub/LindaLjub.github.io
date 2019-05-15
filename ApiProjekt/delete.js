// denna funktion tar bort en person
// den tar in id som parameter för att veta vilket id som ska raderas.
function deleteFunction(id) {

    // hämtar uri/ det id som ska raderas.
      fetch(uri + "/" + id,
        {
      
          method: "DELETE", 
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin", 

          headers:
          {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          
        }).then(res => res.json())
        .then(res => console.log(res))


       // en delay för att Mockapi ska hinna uppdera innan funktionen loadData anropas.
      setTimeout(() => {
        loadData();
      }, 500);

    }



// denna funktion tar bort ett meddelande.
  function deleteFunctionMessage(id) {

      // hämtar uri/ det id som ska raderas.
      fetch(uriMessage + "/" + id,
        {
         
          method: "DELETE", 
          mode: "cors", 
          cache: "no-cache",
          credentials: "same-origin", 

          headers:
          {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
       
        }).then(res => res.json())
        .then(res => console.log(res))

      // en delay för att Mockapi ska hinna uppdera innan funktionen loadData anropas.
      setTimeout(() => {
        loadMessage();
      }, 500);

    }

