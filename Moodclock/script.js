var knappArg=document.getElementById("arg");
var knappNeutral=document.getElementById("neutral");
var knappGlad=document.getElementById("glad");
var urlGlad="http://sto-linuxsrv1:9000/mood/happy";
var urlNeutral="http://sto-linuxsrv1:9000/mood/neutral";
var urlArg="http://sto-linuxsrv1:9000/mood/angry";
var urlGet="http://sto-linuxsrv1:9000/mood";
var knappAdmin=document.getElementById("adminButton");


knappArg.onclick=knappAlertArg;
knappNeutral.onclick=knappAlertNeutral;
knappGlad.onclick=knappAlertGlad;
knappAdmin.onclick=getData;

function knappAlertArg(){
    callRestEndpoint(urlArg);
    openWin();
}

function knappAlertGlad(){
    callRestEndpoint(urlGlad);
    openWin();
}

function knappAlertNeutral(){
    callRestEndpoint(urlNeutral);
    openWin();
}

function openWin(){
    myWindow = window.open("tack.html", "myWindow");
    setTimeout(closeWin, 1200);
}

function closeWin(){
    myWindow.close();
}

function callRestEndpoint(moodUrl){ 
    $.ajax({ 
        url: moodUrl, 
        type: "post"
    });
    //Fråga om Johan/Simon kan ändra tidsformat till förståligt
}

function getData(){
    $.ajax({
        url: urlGet, 
        type: 'GET',
        success: function(res) {
        console.log(res);
        alert(res);
        }
    });
}