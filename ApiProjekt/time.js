

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
            divtag.innerHTML = `<div class ="timeNow"> ${data.datetime.substring(11,16)} </div><br> <div class ="date">[ ${data.datetime.substring(0,10)} ] </div>  `;
            datadivTime.appendChild(divtag);
        
            
        })

    