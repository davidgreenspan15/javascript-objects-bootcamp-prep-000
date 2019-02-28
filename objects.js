var playlist = {artist: 0}

function updatePlaylist(playlist,artistName,songTitle){
playlist[artistName] = songTitle
}
function removeFromPlaylist(playlist, artistName){
delete playlist.artistName

}