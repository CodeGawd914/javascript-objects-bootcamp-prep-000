var playlist = new Object ({ artistname: 'song title'})
function updatePlaylist (playlist,artistName,songTitle){
  playlist[artistname] = 'song'
  return playlist
}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistname]
  return playlist
}