
//let's annotate this for a second

function shuffleSongs(list) {                                // 1 list 5 songs
  let songList = list;                                       // 2 songList is 5 songs
  for (let i = songList.length - 1; i > 0; i--) {            // 3 i is 4
    const j = Math.floor(Math.random() * (i + 1));           // 4 random num between 0 and 5(exclusive)
    [songList[i], songList[j]] = [songList[j], songList[i]]; // 5 i is 4, songList[4], songList[0]...now those will swap places in the list 
  } 
  return songList;                                           // 
}
 
songList[i] = songlist[j]


let songs = ["Song1", "Fun Song", "Groupy Song", "Song 16", "Leslie's Song"];
console.log(shuffleSongs(songs));

let m = Math.floor(Math.random() * 5);
console.log(m);