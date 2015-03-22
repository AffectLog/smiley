$( document ).ready(function() {
    var $star_rating = $('.star-rating .fa');

    var SetRatingStar = function() {
        return $star_rating.each(function() {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('fa-square-o').addClass('fa-square');
            } else {
                return $(this).removeClass('fa-square').addClass('fa-square-o');
            }
        });
    };

    $star_rating.on('click', function() {
        var rating = $(this).data('rating');
        $(this).parent('div').find('input').val(rating);

        $(this).parent('div').find('span').each(function() {
            if (parseInt($(this).attr('data-rating')) > parseInt(rating)) {
                return $(this).removeClass('fa-square').addClass('fa-square-o');
            } else {
                return $(this).removeClass('fa-square-o').addClass('fa-square');
            }
        });

    });

    SetRatingStar();
});
$("#toggle-feedback").click(function() {
    $( "#toggle" ).toggle( "slide" );
});
$( "#feedbackform" ).submit(function(){
    var d = {};
    d.intensity = $( "form" ).serialize();

    alert($( "form" ).serialize());
    $.ajax({
        url: "https://api.mongolab.com/api/1/databases/smileydb/collections/feedback?apiKey=7HhN3sa1zLtTRKzYf34cicNQTfGWYEPd",
        type: "POST",
        data: $( "#feedbackform" ).serialize(),
        crossDomain: true,
        contentType: "application/json",
        success: function(data) {
            console.log(data);
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    }).done(function() {
        $( this ).addClass( "done" );
    });
});
$( ".icon" ).on( "mouseover", function() {
    if ( $( this ).hasClass( "green" ) )
        $( this ).css( "background-color", "lightgreen" );
    if ( $( this ).hasClass( "yellow" ) )
        $( this ).css( "background-color", "yellow" );
    if ( $( this ).hasClass( "orange" ) )
        $( this ).css( "background-color", "orange" );
    if ( $( this ).hasClass( "red" ) )
        $( this ).css( "background-color", "red" );
});
$( ".icon" ).on( "mouseout", function() {
    $( this ).css( "background-color", "" );
});
$( ".icon" ).on( "click", function(e) {
    rebindMouseOut();
    $( this ).unbind( "mouseout" );
    if ( $( this ).hasClass( "green" ) ) {
        $(this).css("background-color", "lightgreen");
        $( "#emotion").val("happy");
        $( ".happy").show();
    }
    if ( $( this ).hasClass( "yellow" ) ) {
        $(this).css("background-color", "yellow");
        $( "#emotion").val("okay");
        $( ".okay").show();
    }
    if ( $( this ).hasClass( "orange" ) ) {
        $(this).css("background-color", "orange");
        $( "#emotion").val("sad");
        $( ".sad").show();
    }
    if ( $( this ).hasClass( "red" ) ) {
        $(this).css("background-color", "red");
        $( "#emotion").val("unhappy");
        $( ".unhappy").show();
    }
    return false;
});
function rebindMouseOut(){
    $( ".star-rating" ).hide();
    $( ".rating-value").val(0);
    $( ".icon" ).css( "background-color", "" );
    $( ".icon" ).bind( "mouseout", function(){
        $( this ).css( "background-color", "" );
    });
}
