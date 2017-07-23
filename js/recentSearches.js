function showSearches(){
        $("#results").fadeIn();
        $("#results").append("Recent Searches: <br>");
        if(localStorage['searches'] == undefined){
            $("#results").append("No Saved Results");
        }else{

            var savedSearches = localStorage['searches'];
            savedSearches = JSON.parse(savedSearches);
            for( var i = savedSearches.length - 1; i >= 0; i--){
                $("#results").append(savedSearches[i] + "<br>");
            }
        }
    }

