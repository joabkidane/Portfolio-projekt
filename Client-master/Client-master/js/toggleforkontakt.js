$(document).ready(function() {
    $('.main-nav_toggle').click(function(){
    $('.main-nav_toggle').toggleClass('active');
    $('.main-nav_items').toggleClass('active');
    $('.main-nav_items a').css({ "visibility": 'visible'
        });
    })
})