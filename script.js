const myLibrary = [];

const form = document.getElementById("form");

const btn = document.querySelector("button");
const star = document.querySelectorAll("span");

const library = document.getElementsByClassName("library")[0];

const card = document.getElementsByClassName("card")[0];

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

    form.reset();
    /*send/call to the html and show it in the card in the library*/
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


function createCard(){
    const clone = card.cloneNode(true);
    clone.style.visibility = "visible";
    clone.style.display ="flex";
    clone.querySelector("#close-button").addEventListener("click", deleteCard);
    library.appendChild(clone);

    loadCard();
}


function deleteCard(){/* delete parent's parent and remove from array*/
    const cardDeleted = this.parentNode.parentNode;
    const titleDeleted = cardDeleted.querySelector("#title");
    
    myLibrary.forEach((entry, index) => {
        if(entry.title === titleDeleted.innerHTML){
            myLibrary.splice(index, 1);
        }
    });

    cardDeleted.remove();
    console.log(myLibrary.length);
}

btn.addEventListener("click", createCard);

function loadCard(){
    const emptyCard = library.lastChild;
    const lastEntry = myLibrary.at(-1);

    let emptyTitle = emptyCard.querySelector("#title");
    let emptyAuthor = emptyCard.querySelector("#author");
    let emptyGenre= emptyCard.querySelector("#genre");
    let emptyPages = emptyCard.querySelector("#pages");
    let emptyNotes = emptyCard.querySelector("#notes");
    let emptyRead = emptyCard.querySelector("#read");
    let emptyScore = emptyCard.querySelector("#score")

    emptyTitle.innerHTML = lastEntry.title;
    emptyAuthor.innerHTML = lastEntry.author;
    emptyGenre.innerHTML = lastEntry.genre;
    emptyPages.innerHTML = lastEntry.pages;
    emptyNotes.innerHTML = lastEntry.notes;

    if(lastEntry.read==true){
        emptyRead.innerHTML = "Read";
    }
    else{
        emptyRead.innerHTML = "Not read";
    }

    emptyScore.innerHTML = lastEntry.score;
}



/*didn't do this: when generating card; add a star for each number in score*/