const myLibrary = [];

function Book(title, author, genre, pages, read, notes, score){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
    this.score = score;
}

function addBook(){
    const book = new Book("","","","","","","")
    book.push("myLibrary");
}