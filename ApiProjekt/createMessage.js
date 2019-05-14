
    // denna funktion skapar ett nytt meddelande.
    function createM() {
        
        // detta hamnar i div "message1"
      const textInput1 = document.getElementById('message1').value;
        
        // variabeln textInput1 kommer från input fältet.
      var data = { Message: textInput1 }

      // en POST, vilket innebär att den skapar en ny post.
      fetch(uriMessage,
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
        loadMessage();
      }, 1000);
    }

