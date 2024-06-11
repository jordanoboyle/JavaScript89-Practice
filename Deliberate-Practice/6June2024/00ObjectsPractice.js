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
    for (let i = this.list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.list[i], this.list[j]] = [this.list[j], this.list[i]];
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
console.log(list1.shuffleSongs);

// 4. Write a Contact class that stores the name, age, and contact_info, where contact_info is a hash that stores any additional information about the contact.