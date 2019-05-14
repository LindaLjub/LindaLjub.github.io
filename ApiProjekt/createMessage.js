
    function createM() {
      const textInput1 = document.getElementById('message1').value;
      var data = { Message: textInput1 }

      fetch(uriMessage,
        {
          // Nytt!
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
   
      setTimeout(() => {
        loadMessage();
      }, 1000);
    }

