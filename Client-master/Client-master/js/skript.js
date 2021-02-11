// localStorage.clear();
//------------------spara kontaktdata i localstorage-----------------------------
$('#btnKontakt').on('click', function(){

    $('input[type="text"]').each(function(){    

        var namn = "Namn"; //tilldelar key till namn
        var value = $('.namn').val();//hämtar värdet från input text

        var email = "Email" //tilldelar key till namn
        var valueOfEmail = $('.email').val();//hämtar värdet från input text

        var nummer = "Nummer" //tilldelar key till namn
        var valueOfNummer = $('.nummer').val();//hämtar värdet från input text

        var meddelande = "Meddelande" //tilldelar key till namn
        var valueOfMeddelande = $('.meddelande').val();//hämtar värdet från input text

       localStorage.setItem(namn, value);
       localStorage.setItem(email, valueOfEmail);
       localStorage.setItem(nummer, valueOfNummer);
       localStorage.setItem(meddelande, valueOfMeddelande);


    });   
});




//Animering-----------------------------------------------------------------------------------------------------------------------------
$(function() {
    $('#fadein').hide().fadeIn(2000);
    
});
// Slideshow--------------------------------------------------------------------------------------------------------------------------------------
var i = 0;
var timer;
    var path = [];
    path[0] = "https://images.unsplash.com/photo-1487721984358-8ecc6e8b412a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1055&q=80";
    path[1] = "https://images.unsplash.com/photo-1472437774355-71ab6752b434?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80";
    path[2] = "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";
    path[3] = "https://images.unsplash.com/photo-1546900703-cf06143d1239?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1291&q=80";
       
    function changeImage(){
        document.getElementById("slideshow").src=path[i];
           
        if(i < path.length - 1){
             i++;
        }
        else 
        {
            i = 0;
        }
               
        timer = setTimeout("changeImage()", 3000); //rekursiv funktion som kör sig själv tills om och om igen
        }
           
        function stopSlide(){
            clearTimeout(timer); //stoppar timern när man hooverar över bilden
        }  
           
        function runSlide() 
        {
            changeImage(); //kör funktion som byter bild när man inte längre hooverar över sliden
        }   
        window.onload = runSlide; // sätter igång slideshowen med hjälp av den rekursiva funktionen
//navtoggle----------------------------------------------------------------------------------------------------------------------------
$(document).ready(function() {
    $('.main-nav_toggle').click(function(){
        $('.main-nav_toggle').toggleClass('active');
        $('.main-nav_items').toggleClass('active');
        $('.main-nav_items a').css({ "visibility": 'visible'});
    });       
});
    