// Q3: Library Management System — Classes + Objects
"use strict";

class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }
  issueBook() {
    if (this.isIssued) return false;
    this.isIssued = true;
    return true;
  }
  returnBook() {
    if (!this.isIssued) return false;
    this.isIssued = false;
    return true;
  }
  getDetails() {
    return `${this.title} by ${this.author} | ISBN: ${this.isbn} | ${this.isIssued ? "Issued" : "Available"}`;
  }
}

const books = [
  new Book("Clean Code", "Robert C. Martin", "978-0132350884"),
  new Book("The Pragmatic Programmer", "Andrew Hunt", "978-0135957059"),
  new Book("Introduction to Algorithms", "Thomas H. Cormen", "978-0262046305", true),
  new Book("JavaScript: The Good Parts", "Douglas Crockford", "978-0596517748")
];
let lastIssuedBook = null;

function renderAvailableBooks() {
  const available = books.filter(book => !book.isIssued);
  document.getElementById("booksOutput").textContent = available.length
    ? available.map(book => book.getDetails()).join("\n")
    : "No books are currently available.";
  console.table(available.map(book => ({ title: book.title, author: book.author, isbn: book.isbn })));
}
renderAvailableBooks();

document.getElementById("issueForm").addEventListener("submit", event => {
  event.preventDefault();
  const isbn = document.getElementById("isbnInput").value.trim();
  const book = books.find(item => item.isbn === isbn);
  const message = document.getElementById("libraryMessage");
  if (!book) message.textContent = "No book found with that ISBN.";
  else if (!book.issueBook()) message.textContent = `"${book.title}" has already been issued.`;
  else {
    lastIssuedBook = book;
    message.textContent = `Successfully issued: ${book.getDetails()}`;
    renderAvailableBooks();
  }
});
document.getElementById("returnButton").addEventListener("click", () => {
  const message = document.getElementById("libraryMessage");
  if (!lastIssuedBook || !lastIssuedBook.returnBook()) {
    message.textContent = "There is no recently issued book to return.";
  } else {
    message.textContent = `Returned: "${lastIssuedBook.title}".`;
    lastIssuedBook = null;
    renderAvailableBooks();
  }
});
