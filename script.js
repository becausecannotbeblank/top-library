const myLibrary = [];

const btn = document.querySelector("button");
const star = document.querySelectorAll("span");

let stars;

starInit();

function Book(title, author, genre, pages, read, notes, score){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.read = read;
    this.notes = notes;
    this.score = score;
}

function addBook(e){
    e.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let genre = document.getElementById("genre").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").checked;
    let notes = document.getElementById("notes").value;
    let score = stars;   

    const book = new Book(title, author, genre, pages, read, notes, score)
    myLibrary.push(book);
    console.log(myLibrary.length);
}

btn.addEventListener("click", addBook);

function starInit(){ /*this initialize each star and makes it clickable; it tells starCheck which one it clicked.*/
    star.forEach((star) => {
        star.addEventListener("click", starCheck);
});
}

function starCheck(){ /*this gives each star the appropriate color and registers the amount so addbook can get the score.*/
    if(this.id=="star1"){
        this.style.color = "orange";
        star2.style.color = "rgb(50, 50, 50)";
        star3.style.color = "rgb(50, 50, 50)";
        star4.style.color = "rgb(50, 50, 50)";
        star5.style.color = "rgb(50, 50, 50)";
        stars = 1;
    }

    if(this.id=="star2"){
        star1.style.color = "orange";
        this.style.color = "orange";
        star3.style.color = "rgb(50, 50, 50)";
        star4.style.color = "rgb(50, 50, 50)";
        star5.style.color = "rgb(50, 50, 50)";
        stars = 2;
    }

    if(this.id=="star3"){
        star1.style.color = "orange";
        star2.style.color = "orange";
        this.style.color = "orange";
        star4.style.color = "rgb(50, 50, 50)";
        star5.style.color = "rgb(50, 50, 50)";
        stars = 3;
    }

    if(this.id=="star4"){
        star1.style.color = "orange";
        star2.style.color = "orange";
        star3.style.color = "orange";
        this.style.color = "orange";
        star5.style.color = "rgb(50, 50, 50)";
        stars = 4;
    }

    if(this.id=="star5"){
        star1.style.color = "orange";
        star2.style.color = "orange";
        star3.style.color = "orange";
        star4.style.color = "orange";
        this.style.color = "orange";
        stars = 5;
    }
}