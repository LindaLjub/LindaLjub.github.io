    // Den här funktionen körs då man klickar på Radera.
    // Funktionen är nästan identisk med homeFunction, men har ett extra invärde 'id'
    // Istället för POST gör vi istället en DELETE.
    // vi lägger till id till den ursprungliga URIn.

    function deleteFunction(id) {

        // Den här raden behövs inte då vi raderar en post 
      //var data = { name: "Micke", isHome: isHomeNow }

      fetch(uri + "/" + id,
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

