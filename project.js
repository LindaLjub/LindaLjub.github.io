 
$(document).ready(function()
{
    // Code for project tabs
    // from start, hide text besides södertörn
    $(".STI_text").hide();
    $(".hobby_text").hide();
    $(".links_webbsites_text").hide();

    // when click on title, show text
    $(".sodertorn_title").click(function()
    {
        $(".STI_text").hide();
        $(".hobby_text").hide();
        $(".links_webbsites_text").hide();
        $(".sodertorn_text").show();

    });

    $(".STI_title").click(function()
    {
        $(".sodertorn_text").hide();
        $(".hobby_text").hide();
        $(".links_webbsites_text").hide();
        $(".STI_text").show();

    });

    $(".hobby_title").click(function()
    {
        $(".sodertorn_text").hide();
        $(".STI_text").hide();
        $(".links_webbsites_text").hide();
        $(".hobby_text").show();

    });

    $(".links_webbsites_title").click(function()
    {
        $(".sodertorn_text").hide();
        $(".STI_text").hide();
        $(".hobby_text").hide();
        $(".links_webbsites_text").show();

    });
           
 });

        
