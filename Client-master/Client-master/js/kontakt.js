//Animering-----------------------------------------------------------------------------------------------------------------------------
$(function() {
    $('#fadein').hide().fadeIn(2000);
    
});

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
