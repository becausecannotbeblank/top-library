const myLibrary = [];

const btn = document.querySelector("button");

function Book(title, author, genre, pages, read, notes){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
 /*   this.score = score;*/
}

function addBook(e){
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let notes = document.getElementById("notes").value;
  /*  let score = document.getElementById("score").value;*/
    
    const book = new Book(title, author, genre, pages, read, notes)
    myLibrary.push(book);
    console.log(myLibrary.length);
}

btn.addEventListener("click", addBook);
