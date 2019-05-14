

    // Hämtar in tid och datum från ett api.
    // Använder sedan datum för att hämta in namnsdag för rätt dag.

    // detta hamnar i div "time"
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
        
            // får fram datum separerat.
            var year = data.datetime.substring(0,4);
            var month = data.datetime.substring(5,7);
            var day = data.datetime.substring(8,10);
        
            // kallar på funktion med datum som parametrar för att få fram namnsdag.
            namnsdag(year,month,day);
          
        })



    // Funktion för att hämta namnsdag.
    function namnsdag(year, month, day)
    {
    
    // även detta hämnar i div "time"
    const datadivTime = document.getElementById('time');
    const uriDag = 'https://cors-anywhere.herokuapp.com/https://api.dryg.net/dagar/v2.1/';


    // hämtar från uri / år, månad och dag som hämtades från tid-api:n
    fetch(uriDag + year + '/' + month + '/' + day)
    .then(response =>
        {
            return response.json()
        })
        .then(data =>
        {
            // visar fram veckodag, vecka och namnsdag.
            // div dag och namn för att style:a med CSS
            let divtag = document.createElement('p');
            divtag.innerHTML = `<div class="dag">${data.dagar[0].veckodag} v.${data.dagar[0].vecka}</div> 
            <div class="namn">${data.dagar[0].namnsdag}</div> `;
            datadivTime.appendChild(divtag);
        
            
        })
    
    }
    