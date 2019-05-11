    //cors gör att man går genom en annan host för att komma vidare, för att när man har det på local host så är det inte tillåten för att den inte är tillräckligt säker.
    const url = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&appid=d2be18c42f6068bee99d3dc03695b978&units=metric"; 
    var text = "";

    // jokes nedanför är namnet på diven.
    const weatherInfo = document.getElementById('weatherInfo');
  /*  
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
*/var hej;

    fetch(url)
    .then(response =>
    {
            return response.json()
    })

    .then(data =>
    {
            let divtag = document.createElement('div');
            divtag.innerHTML = ` <font size="6"> Stockholm </font><br><b><font size="6"> ${data.main.temp}°C</font></b><br><br><div class="infoW"><b>${data.weather[0].description}</b><br> windspeed  ${data.wind.speed} m/s
            <br>humidity  ${data.main.humidity}%</div>`;
            weatherInfo.appendChild(divtag);
        
        
            
            if(data.weather[0].main == "Clear")
                {
                    let divtag1 = document.createElement('div');
                    divtag1.innerHTML = `<div class="infoW">No umbrella or sunglasses are needed.</div><br><br><hr>`;
                    weatherInfo.appendChild(divtag1);
    
                }
            else if(data.weather[0].main == "Rain")
                {
                    let divtag1 = document.createElement('div');
                    divtag1.innerHTML = `You might need an umbrella!</div><br><br><hr>`;
                    weatherInfo.appendChild(divtag1);
                    
                }
                
            else if(data.weather[0].main == "Sun")
                {
                    let divtag1 = document.createElement('div');
                    divtag1.innerHTML = `Bring your sunglasses!</div><br><br><hr>`;
                    weatherInfo.appendChild(divtag1);
                    
                }
            
            
    })

  
//${data.weather[0].main}