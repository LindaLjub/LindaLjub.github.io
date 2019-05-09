   const datadivNews = document.getElementById('news');

    const uriNews = 'https://cors-anywhere.herokuapp.com/http://api.texttv.nu/api/get/100-104?app=apiexempelsidan';



    fetch(uriNews)
    .then(response =>
        {
            return response.json()
        })
        .then(data =>
        {
            let divtag = document.createElement('p');
            divtag.innerHTML = `<div class ="newsNow"> ${data.num} </div>`;
            datadivNews.appendChild(divtag);
        
            
        })

    