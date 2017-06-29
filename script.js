function not_empty( input ) {
    
    if ( input.length !== 0 ) {
        
        return true;
    }
    
    return false;
}


$(document).ready(function() {
    
    $('#sign_up').click(function() {
        if ( not_empty( $('#email').val() ) && not_empty( $('#name').val() ) ) {
        
            $('#myModal').modal('show');
            $('#myModal').find('#text').html('HI - <span style="color: gray">'+ $('#name').val() +'</span> thank you for signing up! We will send an email to <span style="color: gray">'+ $('#email').val() +'</span> shortly')
        
            // $('.form-control').val('')
        }
    })

    $(".social_media").hover(function() {
        $("style").css("background-color", "blue");
    })


    $('.carousel').carousel({
        interval: 2000
        
    })

});
