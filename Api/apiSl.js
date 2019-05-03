 
    //cors gör att man går genom en annan host för att komma vidare, för att när man har det på local host så är det inte tillåten för att den inte är tillräckligt säker.
    const url2 = "https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=0d6124e00bc54c46904b5574c9e81b44&siteid=4122&timewindow=60"; 
    var text2 = "";

    // jokes nedanför är namnet på diven.
    const info2 = document.getElementById('slinfo');
    
    // hämtar från url
    fetch(url2)
    // får ett respons som vi gör till json format
    .then((resp) => resp.json())
    // skapar en namnlös funktion och en variabel.
    .then(function (data)
    {
            // let är en datatyp, en variabeltyp
            let jokes2 = data.ResponseData.Buses
            return jokes2.map(function (jokeobj2)
            {
          
                
                if(jokeobj2.Destination == "Slussen")
                {
                       
                          info2.innerHTML += `<br>${jokeobj2.TransportMode}: ${jokeobj2.LineNumber} from ${jokeobj2.StopAreaName} to ${jokeobj2.Destination} <b><br> Departure in: ${jokeobj2.DisplayTime} **${jokeobj2.TimeTabledDateTime.substring(11,16)}** </b><br><br><hr>`;
                }
            })    
    })
   