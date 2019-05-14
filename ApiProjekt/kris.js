    
    // HÄMTAR IN KRISINFORMATION och visar fram det.

    // detta visas i div "kris"
    const datadivKris = document.getElementById('kris');
    const urikris = 'https://cors-anywhere.herokuapp.com/http://api.krisinformation.se/v1/capmessage?format=json';


    fetch(urikris)
    .then(response =>
        {
            return response.json()
        })
        .then(data =>
        {
    
           let divtag = document.createElement('p');
           divtag.innerHTML = `<div class="area"> [ ${data[0].InfoData[0].Area[0].AreaDesc} ]</div><br>Avsändare: ${data[0].Sender} <br> Publiserad: ${data[0].Published.substring(0,10)} kl. ${data[0].Published.substring(11,16)} <br><br><b>${data[0].InfoData[0].Headline} </b><br> ${data[0].InfoData[0].Description} <br><br><a href ="${data[0].InfoData[0].Web}">Länk till artikel</a> <br><br><hr><br>`;
            datadivKris.appendChild(divtag);
        
        
            let divtag1 = document.createElement('p');
            divtag1.innerHTML = `<div class="area"> [ ${data[1].InfoData[0].Area[0].AreaDesc} ]</div> <br>Avsändare: ${data[1].Sender} <br> Publiserad: ${data[1].Published.substring(0,10)} kl. ${data[1].Published.substring(11,16)} <br><br><b>${data[1].InfoData[0].Headline} </b><br> ${data[1].InfoData[0].Description} <br><br><a href ="${data[1].InfoData[0].Web}">Länk till artikel</a><br><br><hr>`;
            datadivKris.appendChild(divtag1);
        
            
        })

    