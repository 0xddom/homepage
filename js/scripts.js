/*  Based on gokoururi's one
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the COPYING file for more details. */

/*  Remove mascot class from element "main" if its width is <= mascotMinWidth */
function controlMascot(mascot, mascotMinWidth) {
    $(window).resize(function(event) {
        if ( $(window).width() <= mascotMinWidth && $("main").hasClass("mascot") ) {
            removeMascot();
        } else if( $(window).width() > mascotMinWidth && ! $("main").hasClass("mascot") ) {
            setMascot(mascot);
        }
    });
}

function setMascot(mascot) {
    $('main').addClass("mascot");
    $('main').css("background-image", "url(" + mascot + ")");
    $('main').removeClass("plain");
}

function removeMascot() {
    $('main').removeClass("mascot");
    $('main').css("background-image", "");
    $('main').addClass("plain");
}

//Function to set the rank in osu
function setOsuRank() {
    //TODO Here put the range numbers obtained by the proxy server.
    //Globals name:
    //  MUNDIAL_RANK
    //  NATIONAL_RANK
    //They are a number.
    var rank_str = "Rango #" + MUNDIAL_RANK
    var nrank_str = "Rango nacional #" + NATIONAL_RANK
    $("a#rank").text(rank_str);
    $("a#nrank").text(nrank_str);
}

function updateMascot() {
    do {
        var mascot = mascotPath + mascotList[Math.floor(Math.random() * mascotList.length)];
    } while(LAST_MASCOT == mascot);
    LAST_MASCOT = mascot;
    var mascotMinWidth  = '750';

    if ( mascotEnable ) { 
        setMascot(mascot);
        controlMascot(mascot, mascotMinWidth);
    } else { removeMascot(); }
}

$(document).ready(function(event) {
    do {
        var mascot = mascotPath + mascotList[Math.floor(Math.random() * mascotList.length)];
    } while(LAST_MASCOT == mascot);
    LAST_MASCOT = mascot;
    var mascotMinWidth  = '750';

    if ( mascotEnable ) { 
        setMascot(mascot);
        controlMascot(mascot, mascotMinWidth);
    } else { removeMascot(); }
    setOsuRank();
});