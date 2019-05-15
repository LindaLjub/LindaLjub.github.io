    const urikris = 'https://cors-anywhere.herokuapp.com/http://api.krisinformation.se/v1/capmessage?format=json';
    const urlJoke = "https://cors-anywhere.herokuapp.com/http://api.icndb.com/jokes/random/5";


// anropa funktionerna
kris();
joke();


// HÄMTAR IN KRISINFORMATION och visar fram det.
function kris(){
    
    // detta visas i div "kris"
    const datadivKris = document.getElementById('kris');


    fetch(urikris)
    .then(response =>
        {
            return response.json()
        })
        .then(data =>
        {
    
            // en loop som skriver ut de 4 senaste från informationen.
            for(var i=0; i < 4; i++)
            {
                let divtag = document.createElement('p');
               divtag.innerHTML = `<div class="area"> [ ${data[i].InfoData[0].Area[0].AreaDesc} ]</div><br>Avsändare: ${data[i].Sender} <br> Publiserad: ${data[i].Published.substring(0,10)} kl. ${data[i].Published.substring(11,16)} <br><br><b>${data[i].InfoData[0].Headline} </b><br> ${data[i].InfoData[0].Description} <br><br><a href ="${data[i].InfoData[0].Web}">Länk till artikel</a> <br><br><hr><br>`;
                datadivKris.appendChild(divtag);
            }
  
        })  

}
  

// hämtar fram ett random joke.
function joke(){
    
    // hamnar i div "jokes"
    const info = document.getElementById('jokes');


    fetch(urlJoke)
    .then((resp) => resp.json())
    .then(function (data)
    {
        let jokes = data.value
        return jokes.map(function (jokeobj)
        {
            // visar fram skämtet
            info.innerHTML += `<br>${jokeobj.joke}<br>`;
        }

        )

    })  
    
}

