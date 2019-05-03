    //cors gör att man går genom en annan host för att komma vidare, för att när man har det på local host så är det inte tillåten för att den inte är tillräckligt säker.
    const url3 = "https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=0d6124e00bc54c46904b5574c9e81b44&siteid=4122&timewindow=30"; 
    var text3 = "";

    // jokes nedanför är namnet på diven.
    const info3 = document.getElementById('slinfoAll');
    
    // hämtar från url
    fetch(url3)
    // får ett respons som vi gör till json format
    .then((resp) => resp.json())
    // skapar en namnlös funktion och en variabel.
    .then(function (data)
    {
            // let är en datatyp, en variabeltyp
            let jokes3 = data.ResponseData.Buses
            return jokes3.map(function (jokeobj3)
            {
                info3.innerHTML += `<br>${jokeobj3.TransportMode}: ${jokeobj3.LineNumber} from ${jokeobj3.StopAreaName} to ${jokeobj3.Destination} <b><br> Departure in: ${jokeobj3.DisplayTime} **${jokeobj3.TimeTabledDateTime.substring(11,16)}** </b><br><br><hr>`;

            })    
    })