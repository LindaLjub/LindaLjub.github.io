

    const datadivTime = document.getElementById('time');

    const uriTime = 'https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/Europe/Stockholm.json';


    fetch(uriTime)
    .then(response =>
        {
            return response.json()
        })
        .then(data =>
        {
            let divtag = document.createElement('p');
            divtag.innerHTML = `${data.datetime.substring(0,10)} <br>Klockan är ${data.datetime.substring(11,16)} `;
            datadivTime.appendChild(divtag);
        
            
        })

    