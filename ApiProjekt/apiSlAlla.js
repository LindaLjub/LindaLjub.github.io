    //cors gör att man går genom en annan host för att komma vidare, för att när man har det på local host så är det inte tillåten för att den inte är tillräckligt säker.
    const urlSl = "https://cors-anywhere.herokuapp.com/http://api.sl.se/api2/realtimedeparturesV4.json?key=0d6124e00bc54c46904b5574c9e81b44&siteid=4122&timewindow=30"; 
   
     var text3 = "";
    // jokes nedanför är namnet på diven.
    const infoSl = document.getElementById('slinfo');
    
    // hämtar från url
   fetch(urlSl)
    .then(response =>
        {
            return response.json()
        })
        .then(data =>
        {
       
        let divtag = document.createElement('p');
        divtag.innerHTML += `<br>${data.ResponseData.Buses[0].TransportMode}  ${data.ResponseData.Buses[0].LineNumber} from ${data.ResponseData.Buses[0].StopAreaName} to ${data.ResponseData.Buses[0].Destination} <b><br> Departure in: ${data.ResponseData.Buses[0].DisplayTime} **${data.ResponseData.Buses[0].TimeTabledDateTime.substring(11,16)}** </b><br><br><hr>`;
        infoSl.appendChild(divtag);
       
        var hej = data.ResponseData.Buses[0].LineNumber;
        console.log(hej);
    })

//Deviations


