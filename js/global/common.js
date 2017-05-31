$(function () {
    function getWinH() {
        return window.innerHeight || document.body.clientHeight;
    }
    console.log(getWinH());
    
    $('.content').css({height: getWinH()-140+'px'});

    // $('.write-wrap').css({height: getWinH()-266+'px'});

    $(window).resize(function() {
        $('.content').css({height: getWinH()-140+'px'});

        // $('.write-wrap').css({height: getWinH()-266+'px'});
    });



});