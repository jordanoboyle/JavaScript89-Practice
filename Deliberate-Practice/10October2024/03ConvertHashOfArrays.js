// 9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}, {author: "Eion Colfer", title: "Artemis Fowl"}, {author: "Eion Colfer", title: "The Supernaturals"}] becomes {"Jeff Smith": ["Bone", "RASL"], "George Orwell": ["1984"], "Eion Colfer": ["Artemis Fowl", "The Supernaturals"]}.

let authorBooks = [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}, {author: "Eion Colfer", title: "Artemis Fowl"}, {author: "Eion Colfer", title: "The Supernaturals"}];

function organizeAuthorsAndBooks(bookAuthorList) {
  let organizedAuthorHash = {};

  authorBooks.forEach(element => {
    let author = element['author'];
    let book   = element['title'];

    if (organizedAuthorHash[author] === undefined) {
      organizedAuthorHash[author] = [book];
    } else {
      organizedAuthorHash[author].push(book);
    }
  });
  return organizedAuthorHash;
}

console.log(organizeAuthorsAndBooks(authorBooks));