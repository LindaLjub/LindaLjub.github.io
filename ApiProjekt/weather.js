    //cors gör att man går genom en annan host för att komma vidare, för att när man har det på local host så är det inte tillåten för att den inte är tillräckligt säker.
    const url = "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&appid=d2be18c42f6068bee99d3dc03695b978&units=metric"; 

    var text = "";

    // detta hamnar i div "weatherInfo"
    const weatherInfo = document.getElementById('weatherInfo');

    fetch(url)
    .then(response =>
    {
            return response.json()
    })

    .then(data =>
    {
            // visar upp vädret i Stockholm.
            let divtag = document.createElement('div');
            divtag.innerHTML = ` <font size="6"> Stockholm </font><br><b><font size="6"> ${data.main.temp}°C</font></b><br><br><div class="infoW"><b>${data.weather[0].description}</b><br> windspeed  ${data.wind.speed} m/s
            <br>humidity  ${data.main.humidity}%</div>`;
            weatherInfo.appendChild(divtag);
        
        
            // Om det är regn, clear eller sol.
            // En kul detalj, visar om du ska ta med dig paraply eller solglasögon.
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