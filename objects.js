var playlist = new Object ({ artistname: 'song title'})
function updatePlaylist (playlist,artistname,songtitle){
  playlist.artistname = 'song'
  return playlist
}
function removeFromPlaylist([playlist], artistname){
  delete playlist.artistname

}