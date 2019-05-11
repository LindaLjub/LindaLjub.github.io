   const datadivNews = document.getElementById('kris');

    const uriNews = 'https://cors-anywhere.herokuapp.com/http://api.krisinformation.se/v1/capmessage?format=json';



    fetch(uriNews)
    .then(response =>
        {
            return response.json()
        })
        .then(data =>
        {
           let divtag = document.createElement('p');
           divtag.innerHTML = `<div class="area"> [ ${data[0].InfoData[0].Area[0].AreaDesc} ]</div><div class ="krisinfo"> Avsändare: ${data[0].Sender} <br> Publiserad: ${data[0].Published.substring(0,10)} kl. ${data[0].Published.substring(11,16)} <br><br><b>${data[0].InfoData[0].Headline} </b><br> ${data[0].InfoData[0].Description} <br><br><a href ="${data[0].InfoData[0].Web}">Länk till artikel</a></div> <br><hr><br>`;
            datadivNews.appendChild(divtag);
        
        
            let divtag1 = document.createElement('p');
            divtag1.innerHTML = `<div class="area"> [ ${data[1].InfoData[0].Area[0].AreaDesc} ]</div><div class ="krisinfo"> Avsändare: ${data[1].Sender} <br> Publiserad: ${data[1].Published.substring(0,10)} kl. ${data[1].Published.substring(11,16)} <br><br><b>${data[1].InfoData[0].Headline} </b><br> ${data[1].InfoData[0].Description} <br><br><a href ="${data[1].InfoData[0].Web}">Länk till artikel</a></div><br><hr>`;
            datadivNews.appendChild(divtag1);
        
            
        })

    