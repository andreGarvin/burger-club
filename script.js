function not_empty( input ) {
    
    if ( input.length !== 0 ) {
        
        return true
    }
    
    return false
}


$(document).ready(function() {
    
    $('#myModal').on('show.bs.modal', function( e ) {
        if ( not_empty( $('#email').val() ) && not_empty( $('#name').val() ) ) {
            
            var modal = $(this)
            modal.find('#text').html('HI - <span style="color: gray">'+ $('#name').val() +'</span> thank you for signing up! We will send an email to <span style="color: gray">'+ $('#email').val() +'</span> shortly')
        
            $('.form-control').val('')
        }
        else {
            
            console.log('Please provide the information needed');
        }
    })

    $(".social_media").hover(function() {
        $("style").css("background-color", "blue");
    })


    $('.carousel').carousel({
        interval: 2000
        
    })

});
