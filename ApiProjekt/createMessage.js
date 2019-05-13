// Det vi skriver i textrutan hamnar i variabeln 'textInput'
    function createM() {
      const textInput1 = document.getElementById('message1').value;
      var data = { Message: textInput1 }

      fetch(uriMessage,
        {
          // Nytt!
          method: "POST", // *GET, POST, PUT, DELETE, etc.
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
        loadMessage();
      }, 1000);
    }

