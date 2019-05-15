
    // en fuktion som ändrar hemma/ej hemma.
    // skickar med ett id, och en true/false variabel.
    function changeFunction(isHomeNow, id) {
      var data = {isHome: isHomeNow }


      // uri:en får id, ändrar rätt person.
      // PUT - ändrar värdet.
      fetch(uri + "/" + id,
        {
          method: "PUT", 
          mode: "cors", 
          cache: "no-cache", 
          credentials: "same-origin", 

          headers:
          {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json())
        .then(res => console.log(res))

        // en fördröjning på en 0,5 sek så att mockapi hinner uppdateras.
      setTimeout(() => {
        loadData();
      }, 500);

    }




    // en funktion som ändrar humör.
     // skickar med ett id, och en humörvariabel variabel.
  function changeFunctionMood(hej, id) {
      var data = {Mood: hej }

  
      // uri:en får id, ändrar rätt person.
      // PUT - ändrar värdet.
      fetch(uri + "/" + id,
        {
          method: "PUT", 
          mode: "cors", 
          cache: "no-cache", 
          credentials: "same-origin", 

          headers:
          {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        }).then(res => res.json())
        .then(res => console.log(res))

     // en fördröjning på en 0,5 sek så att mockapi hinner uppdateras.
      setTimeout(() => {
        loadData();
      }, 500);

    }
