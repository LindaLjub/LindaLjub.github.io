const urlJoke = "https://cors-anywhere.herokuapp.com/http://api.icndb.com/jokes/random/5";

const info = document.getElementById('jokes');

fetch(urlJoke)
.then((resp) => resp.json())
.then(function (data)
{
    let jokes = data.value
    return jokes.map(function (jokeobj)
    {
        info.innerHTML += `<br>${jokeobj.joke}<br>`;
    }
    
    )


})
