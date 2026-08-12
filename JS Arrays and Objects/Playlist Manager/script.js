// 2. Playlist Manager
// Covers: push/pop/shift/unshift, access/update, array basics

// Array of song names/objects
// addSongToEnd, addSongToStart, removeLastSong, removeFirstSong, skipTo(index)
// Bonus: add a "now playing" pointer that tracks current index
const playlist = ["Gnarly", "Stateside", "Vogue", "ART", "Touch"];
console.log(playlist);

function addSongToEnd(song) {
  playlist.push(song);
  return console.log(playlist);
}
function addSongToStart(song) {
  playlist.unshift(song);
  return console.log(playlist);
}
function removeLastSong(array) {
  array.pop();
  return console.log(array);
}
function removeFirstSong(array) {
  array.shift();
  return console.log(array);
}

addSongToEnd("Gabriella");
addSongToStart("Dai Dai");
removeLastSong(playlist);
removeFirstSong(playlist);

// idk what you mean by the bonus
