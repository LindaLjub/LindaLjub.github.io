
    const uriPic2 = 'https://cors-anywhere.herokuapp.com/https://api.unsplash.com/photos/random/?client_id=fc0e57208b141cb589ed164559f4195d55d99d917f192f32d25ff5c3e0fd3dc5';

    const datadivPic2 = document.getElementById('picture2');

    fetch(uriPic2)
    .then(response =>
        {
            return response.json()
        })
        .then(data =>
        {
       
        var W = data.width*0.1;
        var H = data.height*0.1;
        var PicUrl2 = data.urls.raw;
        var A = data.user.links.html;
        var name = data.user.name;
            
        
            let divtag = document.createElement('p');
            divtag.innerHTML = `<img src="${PicUrl2}" width="400" alt="Photos by Unsplash"> <br>Photo by <a href="${A}"> ${name}</a> on <a href="https://unsplash.com/"> Unsplash </a>`;
            datadivPic2.appendChild(divtag);
        
        
        })

