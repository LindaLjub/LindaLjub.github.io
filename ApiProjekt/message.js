  const uriMessage = 'https://5cd130aed4a78300147be590.mockapi.io/Message';


loadMessage();

function loadMessage(){
    

 const datadivMessage = document.getElementById('messages');



 datadivMessage.innerHTML = '';

      fetch(uriMessage)
        .then((resp) => resp.json())
        .then(function (datas) {
          return datas.map(function (data) {
              
            let divtag = document.createElement('div');
              
            datadivMessage.innerHTML +=`<hr> <br><button type="button" class ="button3" onclick="deleteFunctionMessage(${data.id})"> Radera</button> <br><br>${data.Message}<br><br>`;
            datadivMessage.appendChild(divtag);
              
            
         })
        
      });  
    
    
}


