function spaceBar () {
  let space = "";
  for (let i = 0; i < 21; i++) { 
    space += "%";
  }
  return console.log(space);
}


// 3. Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.
class Playlist {
  constructor (name) {
    this.name = name;
    this.list = [];
  }

  addSong(songToAdd) {
    this.list.push(songToAdd);
  }

  removeSong(songToRemove) {
    const index = (this.list).indexOf(songToRemove);
    if (index > -1) {
      this.list.splice(index, 1);
    }
  }

  shuffleSongs() {
    let songList = this.list
    for (let i = songList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [songList[i], songList[j]] = [songList[j], songList[i]];
    }
    return console.log(songList);
  }

  displaySong() {
    console.log(`${this.name} has ${this.list.length} songs:`);
    for (let j = 0; j < this.list.length; j++) {
      console.log(`Song ${j + 1}: ${this.list[j]}`);
    }
  }
}

let list1 = new Playlist("Fun Running List");

list1.list.push("Koopa Beach", "Frappe Snowland", "Rainbow Roadr");
console.log(list1);
list1.removeSong("Frappe Snowland");
console.log(list1);
list1.addSong("The Escape");
list1.addSong("Kirby's Dreamland");
list1.shuffleSongs();
list1.displaySong();

spaceBar();

// 4. Write a Contact class that stores the name, age, and contact_info, where contact_info is a hash that stores any additional information about the contact.

class Contact {
  constructor(name, age, contactInfo = {phone: undefined, email: undefined}) {
    this.name = name;
    this.age = age;
    this.contactInfo = contactInfo;
  }
}

let contact1 = new Contact("Jame", 35, {phone: 3307149638, email: "james@email.com"});
console.log(contact1);


// 3. Write a Playlist class that stores a name and an array of songs with methods to add a song, remove a song, shuffle the songs into a random order, and display all the songs.

class SongsList {
  constructor (listName, songList = []) {
    this.listName = listName;
    this.songList = songList;
  }

  addSong(songName) { 
    this.songList.push(songName);
  }

  removeSong(song) {
    let index = this.songList.indexOf(song);
    this.songList.splice(index, 1);
  }

  shuffleSongs() {
    let shuffleList = this.songList;
    for (let i = shuffleList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleList[i], shuffleList[j]] = [shuffleList[j], shuffleList[i]];
    }
    console.log(`Shuffling songs in ${this.listName}:`);
    for (let k = 0; k < shuffleList.length; k++) {
      console.log(`Song ${k + 1}: ${shuffleList[k]}`);
    }
  }
}

let songsOne = new SongsList("Spin Dash", ["Chemical Plant", "Greenhill Zone", "Aqua Temple"]);
console.log(songsOne);
songsOne.addSong("Open Your Heart");
console.log(songsOne);
songsOne.removeSong("Aqua Temple");
console.log(songsOne);
songsOne.addSong("Casino Night");
songsOne.shuffleSongs();