
// function truncateString(str, num) {
//   let newString = "";
//   if (str.length > num) {
//     let short = str.split(",").slice(0,9).join(",");
//   }
//   return short
// }



function shuffleSongs(list) {
  let songList = list;
  for (let i = songList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [songList[i], songList[j]] = [songList[j], songList[i]];
  }
  return songList;
}
 



let songs = ["Song1", "Fun Song", "Groupy Song", "Song 16", "Leslie's Song"];
console.log(shuffleSongs(songs));

let m = Math.floor(Math.random() * 5);
console.log(m);
