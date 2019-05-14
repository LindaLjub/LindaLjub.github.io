
// hämtar fram ett random joke.
const urlJoke = "https://cors-anywhere.herokuapp.com/http://api.icndb.com/jokes/random/5";

// hamnar i div "jokes"
const info = document.getElementById('jokes');



fetch(urlJoke)
.then((resp) => resp.json())
.then(function (data)
{
    let jokes = data.value
    return jokes.map(function (jokeobj)
    {
        // visar fram skämtet
        info.innerHTML += `<br>${jokeobj.joke}<br>`;
    }
    
    )


})
