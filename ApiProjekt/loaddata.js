    const uri = 'https://5cd130aed4a78300147be590.mockapi.io/home';

    loadData();
 

    function loadData() {
    const datadiv = document.getElementById('inputdata');
    const datadiv2 = document.getElementById('inputdata');
        
      datadiv.innerHTML = '';
      fetch(uri)
        .then((resp) => resp.json())
        .then(function (datas) {
          return datas.map(function (data) {
            let divtag = document.createElement('div');


                // dessa skickar med ett id för att veta vilken som ska ändras. 
              if(data.isHome==true)
                {
                     divtag.innerHTML = `<br><font color="green" size="7">${data.name} 
                    </font><font color="grey" size="6"> är ${data.Mood} idag </font> <br>`; 
                    datadiv.appendChild(divtag); 
                }
              
              else
              {
                     divtag.innerHTML = `<br><font color="red" size="7">${data.name} 
                    </font><font color="grey" size="6"> är ${data.Mood} idag </font>`; 
                    datadiv.appendChild(divtag);   
              }
              
                    let divtag1 = document.createElement('div');
                    divtag1.innerHTML = `<br><div class="buttonss">

                         <button type="button" class ="button1"  onclick="changeFunction(true, ${data.id})"> Hemma</button><button type="button" class ="button1"   onclick="changeFunction(false, ${data.id})"> Går ut</button><button type="button" class ="button1" onclick="deleteFunction(${data.id})"> Radera</button>

                        <br>

                        <button type="button" class ="button" onclick ="changeFunctionMood('SUPERGLAD', ${data.id})">  Superglad </button><button type="button" class ="button" onclick="changeFunctionMood('glad', ${data.id})">  Glad </button><button type="button" class ="button" onclick="changeFunctionMood('sur', ${data.id})"> Sur </button><button type="button" class ="button" onclick="changeFunctionMood('ARG', ${data.id})"> Arg </button></div>`;
                        datadiv.appendChild(divtag1);
              
          })
        });
    }
