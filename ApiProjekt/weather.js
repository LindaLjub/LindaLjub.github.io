//weather.js

//https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22


    const datadiv2 = document.getElementById('weather');

    const uri2 = 'https://api.openweathermap.org/data/2.5/weather?q=Stockholm,se&appid=d2be18c42f6068bee99d3dc03695b978&units=metric';


    fetch(uri2)
    .then(response =>
        {
            return response.json()
        })
        .then(data =>
        {
            let divtag = document.createElement('p');
            divtag.innerHTML = `Stockholm <br>Temperatur: ${data.main.temp} grader celsius <br> Luftfuktighet: ${data.main.humidity}`;
        
            datadiv2.appendChild(divtag);
        
            
        })

        

// temp i london

    const datadiv3 = document.getElementById('weather');

    const uri3 = 'https://api.openweathermap.org/data/2.5/weather?q=Ornskoldsvik,se&appid=d2be18c42f6068bee99d3dc03695b978&units=metric';

   
    fetch(uri3)
    .then(response =>
        {
            return response.json()
        })
        .then(data =>
        {
            let divtag = document.createElement('p');
            divtag.innerHTML = `Örnsköldsvik <br>Temperatur: ${data.main.temp} grader celsius <br> Luftfuktighet: ${data.main.humidity}`;
        
            datadiv3.appendChild(divtag);
        
            
        })

    