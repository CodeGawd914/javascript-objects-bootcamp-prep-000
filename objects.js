var playlist = new Object ({ artistname: 'song title'})
function updatePlaylist (playlist,artistName,songTitle){
  playlist[artistName] = 'song'
  return playlist
}
function removeFromPlaylist(playlist,artistName){
  delete playlist[artistName]
  return playlist
}