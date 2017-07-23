function tile(tileState) {
    if(tileState == '1'){
        localStorage['tile'] = '0';
        $("#tile").html("tiles view");
        $("#results").fadeOut();
        $("img").fadeIn();
    }else{
        localStorage['tile'] = '1';
        $("#tile").html("Image view");
        $("img").fadeOut();
        $("#results").fadeIn();
        $("#results div").fadeIn();
    }
}
