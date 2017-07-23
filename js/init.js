 var nextClickCounter = 0;
    if (localStorage['tile'] === undefined) {
        localStorage['tile'] = '1';
    }

 var page_size = 6;

 SC.initialize({
        client_id: 'ggX0UomnLs0VmW7qZnCzw'
    });

    function clearDiv(){
        $("#results").html('');
        $("#images").html('');
    }

