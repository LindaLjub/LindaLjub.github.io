
// denna funktion skapar en ny person med ett ishome-värde.
// POST, personens namn och true/false om den är hemma eller ej.
function createFunction(isHomeNow) {
    
    // detta hamnar i div "name"
      const textInput = document.getElementById('name').value;
    
    // textInput = blir det som skrevs i input i textfältet.
    // isHomeNow = det värde true/false som skickas in från anropet från knappen.
      var data = { name: textInput, isHome: isHomeNow }

      fetch(uri,
        {
          method: "POST",
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
   
    
     // en delay för att Mockapi ska hinna uppdera innan funktionen loadMessage anropas.
      setTimeout(() => {
        loadData();
      }, 1000);
    }

