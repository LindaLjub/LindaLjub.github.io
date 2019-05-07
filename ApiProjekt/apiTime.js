 
    //cors gör att man går genom en annan host för att komma vidare, för att när man har det på local host så är det inte tillåten för att den inte är tillräckligt säker.
    const url2 = "https://cors-anywhere.herokuapp.com/http://worldtimeapi.org/api/timezone/Europe/Stockholm"; 
    var text2 = "";

    // jokes nedanför är namnet på diven.
    const info2 = document.getElementById('timeinfo');
    
    // hämtar från url
    fetch(url2)
    // får ett respons som vi gör till json format
    .then((resp) => resp.json())
    // skapar en namnlös funktion och en variabel.
    .then(function (data)
    {
            // let är en datatyp, en variabeltyp
            let jokes2 = data.region
            return jokes2.map(function (jokeobj2)
            {
          
                
                          info2.innerHTML += `<br>${jokeobj2.week_number}`;
    
            })    
    })
   