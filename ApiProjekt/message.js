
const uriMessage = 'https://5cd130aed4a78300147be590.mockapi.io/Message';

// kallar på funktionen
loadMessage();

// denna funktion hämtar in meddelanden och visar fram dem.
function loadMessage(){
    
// detta visas i div "messages"
 const datadivMessage = document.getElementById('messages');
 datadivMessage.innerHTML = '';

      fetch(uriMessage)
        .then((resp) => resp.json())
        .then(function (datas) {
          return datas.map(function (data) {
              
            let divtag = document.createElement('div');
            
            // visar upp alla meddelanden och skapar en delete-knapp
            datadivMessage.innerHTML +=`<hr> <br><button type="button" class ="button3" onclick="deleteFunctionMessage(${data.id})"> Radera</button> <br><br>${data.Message}<br><br>`;
            datadivMessage.appendChild(divtag);
              
            
         })
        
      });    
}





    // denna funktion skapar ett nytt meddelande.
    // när man trycker på knappen i meddelande fältet kallar man på denna funktion.
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


