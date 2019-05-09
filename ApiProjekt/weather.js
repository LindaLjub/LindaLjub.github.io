    //cors gör att man går genom en annan host för att komma vidare, för att när man har det på local host så är det inte tillåten för att den inte är tillräckligt säker.
    const url = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&appid=d2be18c42f6068bee99d3dc03695b978"; 
    var text = "";

    // jokes nedanför är namnet på diven.
    const info = document.getElementById('weatherInfo');
    
    // hämtar från url
    fetch(url)
    // får ett respons som vi gör till json format
    .then((resp) => resp.json())
    // skapar en namnlös funktion och en variabel.
    .then(function (data)
    {
            // let är en datatyp, en variabeltyp
            let jokes = data.weather
            return jokes.map(function(jokeobj)
            {
                info.innerHTML += `<br>${jokeobj.description}`;

            })    
    })