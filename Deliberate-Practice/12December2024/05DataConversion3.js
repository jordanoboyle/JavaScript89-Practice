import { spaceBar } from "../../Utilities/utils.js";

// 9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.

// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}, {author: "Eion Colfer", title: "Artemis Fowl"}, {author: "Eion Colfer", title: "The Supernaturals"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"], "Eion Colfer" => ["Artemis Fowl", "The Supernaturals"]}.

//DATA SETS
// Dataset 1
const books1 = [
  { author: "J.K. Rowling", title: "Harry Potter and the Sorcerer's Stone" },
  { author: "J.R.R. Tolkien", title: "The Hobbit" },
  { author: "J.K. Rowling", title: "Harry Potter and the Chamber of Secrets" },
  { author: "J.R.R. Tolkien", title: "The Lord of the Rings" },
  { author: "Agatha Christie", title: "Murder on the Orient Express" },
  { author: "J.K. Rowling", title: "Fantastic Beasts and Where to Find Them" },
  { author: "George Orwell", title: "1984" },
  { author: "George Orwell", title: "Animal Farm" },
  { author: "Agatha Christie", title: "And Then There Were None" }
];
// Expected Output:
// {
//   "J.K. Rowling": [
//     "Harry Potter and the Sorcerer's Stone",
//     "Harry Potter and the Chamber of Secrets",
//     "Fantastic Beasts and Where to Find Them"
//   ],
//   "J.R.R. Tolkien": [
//     "The Hobbit",
//     "The Lord of the Rings"
//   ],
//   "Agatha Christie": [
//     "Murder on the Orient Express",
//     "And Then There Were None"
//   ],
//   "George Orwell": [
//     "1984",
//     "Animal Farm"
//   ]
// }

// Dataset 2
const books2 = [
  { author: "Isaac Asimov", title: "Foundation" },
  { author: "Philip K. Dick", title: "Do Androids Dream of Electric Sheep?" },
  { author: "Isaac Asimov", title: "I, Robot" },
  { author: "Arthur C. Clarke", title: "2001: A Space Odyssey" },
  { author: "Philip K. Dick", title: "A Scanner Darkly" },
  { author: "Isaac Asimov", title: "The End of Eternity" },
  { author: "Arthur C. Clarke", title: "Rendezvous with Rama" },
  { author: "Frank Herbert", title: "Dune" },
  { author: "Frank Herbert", title: "Children of Dune" },
  { author: "Philip K. Dick", title: "Ubik" }
];
// Expected Output:
// {
//   "Isaac Asimov": [
//     "Foundation",
//     "I, Robot",
//     "The End of Eternity"
//   ],
//   "Philip K. Dick": [
//     "Do Androids Dream of Electric Sheep?",
//     "A Scanner Darkly",
//     "Ubik"
//   ],
//   "Arthur C. Clarke": [
//     "2001: A Space Odyssey",
//     "Rendezvous with Rama"
//   ],
//   "Frank Herbert": [
//     "Dune",
//     "Children of Dune"
//   ]
// }

//DIFFERENT WORK AROUND, BUT THIS IS A SIMPLE, NON-BRUTEFORCE METHOD. 
function allAuthorBooks(authorBookList) {
  let authorObject = {};

  authorBookList.forEach(item => {
    let bookAuthor = Object.values(item);
    // console.log(bookAuthor);

    if (authorObject[bookAuthor[0]] === undefined) {
      authorObject[bookAuthor[0]] = [bookAuthor[1]];
    } else {
      authorObject[bookAuthor[0]].push(bookAuthor[1]);
    }
    
  });

  return authorObject;
}

console.log(allAuthorBooks(books1));
spaceBar();
console.log(allAuthorBooks(books2));