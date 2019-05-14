

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
            divtag.innerHTML = `<div class ="timeNow"> ${data.datetime.substring(11,16)} </div>[ ${data.datetime.substring(0,10)} ]`;
            datadivTime.appendChild(divtag);
        
            var year = data.datetime.substring(0,4);
            var month = data.datetime.substring(5,7);
            var day = data.datetime.substring(8,10);
        
       
            // kallar på funktion med datum som parametrar.
            namnsdag(year,month,day);
        
            
        })



    function namnsdag(year, month, day)
    {
    
    
    const datadivTime = document.getElementById('time');
    const uriDag = 'https://cors-anywhere.herokuapp.com/https://api.dryg.net/dagar/v2.1/';


    fetch(uriDag + year + '/' + month + '/' + day)
    .then(response =>
        {
            return response.json()
        })
        .then(data =>
        {
            
            let divtag = document.createElement('p');
            divtag.innerHTML = `<div class="dag">${data.dagar[0].veckodag} v.${data.dagar[0].vecka}</div> 
            <div class="namn">${data.dagar[0].namnsdag}</div> `;
            datadivTime.appendChild(divtag);
        
            
        })
    
    
    
    }
    