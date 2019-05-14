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




  function deleteFunctionMessage(id) {

        // Den här raden behövs inte då vi raderar en post 
      //var data = { name: "Micke", isHome: isHomeNow }

      fetch(uriMessage + "/" + id,
        {
          // Nytt!
          method: "DELETE", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit, 

          headers:
          {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          // Ingen body:...
        }).then(res => res.json())
        .then(res => console.log(res))

    // Eftersom MockAPI har en liten fördröjning så låter vi sidan  
    // uppdateras först efter en halv sekund.
      setTimeout(() => {
        loadMessage();
      }, 500);

    }

