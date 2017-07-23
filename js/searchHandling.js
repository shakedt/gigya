
function search(searchText){
    nextClickCounter = 0;
    mainSearch(searchText);
}

function next(searchText){
    nextClickCounter++;
    mainSearch(searchText);
}

function mainSearch(searchText){
    var offset = nextClickCounter * 6;
    $("#results").fadeIn();
    SC.get('/tracks', {
        q: searchText, offset: offset, license:"cc-by-nc-sa", limit: page_size , linked_partitioning: 1
    }).then(function(tracks) {
        tracks = tracks.collection;
        printToScreen(tracks);
    });
}

function saveSearches(searchText){
    if(localStorage['searches'] == undefined){
        var currentSearch = [];
        currentSearch[0] = searchText;
        localStorage['searches'] = JSON.stringify(currentSearch);
    }else{
        var savedSearches = localStorage['searches'];
        savedSearches = JSON.parse(savedSearches);
        if(savedSearches.length >= 5){
            savedSearches.shift();
        }
        savedSearches.push(searchText);
        localStorage['searches'] = JSON.stringify(savedSearches);
    }
}

function printToScreen(tracks){
    for(var i=0; i < tracks.length; i++){
        if(localStorage['tile'] === '1'){
            $("#results").append("<div id='" + i +"'>" +tracks[i].title + "<br></div>");
            $("#images").append("<img alt='"+ tracks[i].uri +"'" + " hidden src='"+tracks[i].artwork_url + "'" + " id='" + i + "img'>");
        }else{
          //  $("#results").hide();
            $("#results").append("<div hidden id='" + i +"'>" +tracks[i].title + "<br></divhidden>");
            $("#images").append("<img alt='"+ tracks[i].uri +"'" + "  src='"+tracks[i].artwork_url + "'" + " id='" + i + "img'>");
        }
    }

}
