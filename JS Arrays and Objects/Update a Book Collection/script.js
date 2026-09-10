const bookCollection = {
  101: {
    title: "1984",
    author: "George Orwell",
    tags: ["dystopian", "classic"],
  },
  102: {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    tags: ["fantasy"],
  },
  103: {
    title: "Atomic Habits",
  },
};

function updateBooks(books, id, prop, value) {
  if (value === "") {
    delete books[id][prop];
  } else if (prop !== "tags" && value !== "") {
    books[id][prop] = value;
  } else if (prop === "tags" && Object.hasOwn(books[id], "tags") === false) {
    books[id][prop] = [value];
  } else if (prop === "tags" && Object.hasOwn(books[id], "tags") === true) {
    books[id]["tags"].push(value);
  }
  return books;
}

console.log(updateBooks(bookCollection, "101", "title", "1985"));
