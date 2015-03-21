$( document ).click(function() {
    $( "#toggle" ).toggle( "slide" );
});
$("#feedback").submit(function(){
    $.ajax({
        url: "https://api.mongolab.com/api/1/databases/smileydb/collections/feedback?apiKey=7HhN3sa1zLtTRKzYf34cicNQTfGWYEPd ",
        type: "POST",
        crossDomain: true,
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
    }
    if ( $( this ).hasClass( "yellow" ) ) {
        $(this).css("background-color", "yellow");
        $( "#emotion").val("okay");
    }
    if ( $( this ).hasClass( "orange" ) ) {
        $(this).css("background-color", "orange");
        $( "#emotion").val("not okay");
    }
    if ( $( this ).hasClass( "red" ) ) {
        $(this).css("background-color", "red");
        $( "#emotion").val("unhappy");
    }
    return false;
});
function rebindMouseOut(){
    $( ".icon" ).css( "background-color", "" );
    $( ".icon" ).bind( "mouseout", function(){
        $( this ).css( "background-color", "" );
    });
}
