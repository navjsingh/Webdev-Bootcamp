//$("h1").css('color', 'blue');

$(document).keydown(function(event){
    $("h1").text(event.key);
})