    // en variabel "app" pekar på div "root"
    const app = document.getElementById('root');
    // skapar en div
    const container = document.createElement('div');
    // skapar en div i en div
    app.appendChild(container);
    
    
    // request till ett api, skapas
    var request = new XMLHttpRequest();
    // använda requestet, //true - asyncromt
    request.open('GET','https://cors-anywhere.herokuapp.com/https://ghibliapi.herokuapp.com/films/',true);
    // skicka request
    request.send();
    
    //när requestet returnerar något
    request.onload = function()
    {
        // Vi skapar ett json objekt av datan
        var data = JSON.parse(this.response);
        // kollar att det fungerar, status mellan 200-400 är ok
        if(request.status >= 200 && request.status < 400)
            {
                // movie objektet skapas här.
                data.forEach(movie => 
                {
                    // varje film hamnar i ett "card", i en div
                    const card = document.createElement('div');
                    
                    // filmens titel ska visas i en rubik, en rubrik skapas h1
                    const h1 = document.createElement('h3');
                    // vad ska stå i h1, filmtiteln.
                    // Om man istället skriver movie.people får du folket i filmen.
                    h1.textContent = movie.title;
                    
                    // skapa en paragraf
                    const p = document.createElement('p');
                    // gör description kortare, tar max 300 tecken
                    movie.description = movie.description.substring(0, 300);
                    p.textContent = `${movie.description}`;
                    
                    // vi vill lägga alla cards i vår container
                    container.appendChild(card);
                    // vi vill lägga i saker i "card"
                    card.appendChild(h1);
                    card.appendChild(p);
                    
                })
            }        
    }