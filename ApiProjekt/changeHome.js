
    // Den här funktionen körs då man klickar på någon av knapparna 'Hemma' och 'Går ut' vid varje namn.
    // Funktionen är nästan identisk med homeFunction, men har ett extra invärde 'id'
    // Istället för POST gör vi istället en PUT.
    // vi lägger till id till den ursprungliga URIn.
    function changeFunction(isHomeNow, id) {
      var data = {isHome: isHomeNow }

      // skickar med hela uri och även id för att veta vilken som ska ändras.
      // metoden put ändrar värdet
      fetch(uri + "/" + id,
        {
          method: "PUT", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, cors, *same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit, 

          headers:
          {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json())
        .then(res => console.log(res))

        // Eftersom MockAPI har en liten fördröjning så låter vi sidan uppdateras först efter 
        // en halv sekund.
      setTimeout(() => {
        loadData();
      }, 500);

    }
