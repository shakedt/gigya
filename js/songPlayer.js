function playSong(songId){
    SC.oEmbed(songId, {
        auto_play: true,
        element: document.getElementById('putTheWidgetHere')
    });
}
