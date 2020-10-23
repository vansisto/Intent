class BookList {
    read = 0;
    notRead = 0;
    nextBookRead;
    currentBook;
    lastBookRed;
    arrBooks = [];

    add(bookToAdd){
        this.arrBooks.push(bookToAdd);
        this.notRead++;
        if (this.arrBooks.length === 1)
            this.currentBook = this.arrBooks[0];
        if (this.arrBooks.length === 2)
            this.nextBookRead = this.arrBooks[1];
    };

    finishCurrentBook(){
        this.currentBook.setRead(true);
        this.lastBookRed = this.currentBook;
        this.currentBook = this.nextBookRead;
        for (let i = 0; i < this.arrBooks.length; i++){
            if (this.currentBook === this.arrBooks[i]) {
                this.nextBookRead = this.arrBooks[i + 1];
                break;
            }
        }
        this.read++;
        this.notRead--;
    };

    getBack(){
        if (this.lastBookRed){
            this.nextBookRead = this.currentBook;
            this.currentBook = this.lastBookRed;
            for (let i = 0; i < this.arrBooks.length; i++){
                if (this.currentBook === this.arrBooks[i]){
                    this.lastBookRed = this.arrBooks[i - 1]
                    this.currentBook.setRead(false);
                    break;
                }
            }
            this.read--;
            this.notRead++;
        }
    };

    getStart(){
        for (const b of this.arrBooks) {
           b.read = false;
           b.readDate = null;
        }
        this.lastBookRed = null;
        this.currentBook = this.arrBooks[0];
        this.nextBookRead = this.arrBooks[1];
        this.read = 0;
        this.notRead = this.arrBooks.length;
    };

    delete(index) {
        if (this.arrBooks[index] === this.lastBookRed) {
            if (index === 0)
                this.lastBookRed = null;
            else
                this.lastBookRed = this.arrBooks[index - 1];
        }
        if (this.arrBooks[index] === this.currentBook){
            if (this.nextBookRead)
                this.currentBook = this.nextBookRead;

            if (this.arrBooks[index + 2])
                this.nextBookRead = this.arrBooks[index + 2];
            else
                this.nextBookRead = null;
        }
        this.arrBooks.splice(index, 1);
    }


}

class Book {
    title;
    genre;
    author;
    read;
    readDate;

    constructor(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
    }

    setRead(boo){
        this.read = boo
        if (boo)
            this.readDate = new Date(Date.now());
        else
            this.readDate = null;
    }
}

let bookList = new BookList();

bookList.add(new Book("It", "Horror", "Stephen King"));
bookList.add(new Book("Dark Tower", "Adventure", "Stephen King"));
bookList.add(new Book("Harry Potter", "Thriller", "Joan K.Rolling"));
bookList.add(new Book("Lord of the Rings", "Fantasy", "Tolkien"));

bookList.finishCurrentBook();
bookList.finishCurrentBook();

document.getElementById("read").innerText = bookList.read;
document.getElementById("unread").innerText = bookList.notRead;

let tbody = document.getElementsByTagName("tbody")[0];
let table = document.getElementsByTagName("table")[0];
table.insertAdjacentHTML("beforebegin", `<span id="prev">Попередня</span>`);
table.insertAdjacentHTML("beforebegin", `<span id="next">Наступна</span>`);

renderListOfBooks();

let addButton = document.getElementsByClassName("addBook")[0];
addButton.addEventListener("click", e => {
    let title = document.getElementsByClassName("title")[0];
    let author = document.getElementsByClassName("author")[0];
    let genre = document.getElementsByClassName("genre")[0];

    if (!!title.value && !!genre.value && !! author.value){
        bookList.add(new Book(title.value, genre.value, author.value));
        renderListOfBooks();

        title.value = "";
        author.value = "";
        genre.value = "";
    } else alert("Усі поля мають бути заповнені")
});

function addRowToTable (element, title, author, genre, read, readDate, index) {
    element.insertAdjacentHTML("beforeend", `
            <tr>
                <td>${title}</td>
                <td>${author}</td>
                <td>${genre}</td>
                <td>${read ? "Прочитано" : "Не прочитано"}</td>
                <td>${read ? readDate.toLocaleDateString() : ""}</td>
                <td><button class="delete" id=${index}>Видалити</button></td>
            </tr>
        `)
}
function renderListOfBooks() {
    tbody.innerHTML = "";
    if (bookList.arrBooks){
        for (let i = 0; i < bookList.arrBooks.length; i++){
            let b = bookList.arrBooks[i];
            addRowToTable(tbody, b.title, b.author, b.genre, b.read, b.readDate, i);
        }
    }
    initializeButtonsEventListeners();
}
function initializeButtonsEventListeners(){
    let nextButton = document.getElementById("next");
    let prevButton = document.getElementById("prev");
    let getStartButton = document.getElementById("getStart");
    let deleteButtons = document.getElementsByClassName("delete");

    nextButton.addEventListener("click", e => {
        bookList.finishCurrentBook();
        renderListOfBooks();
    });
    prevButton.addEventListener("click", e => {
        bookList.getBack();
        renderListOfBooks();
    });
    getStartButton.addEventListener("click", e => {
        bookList.getStart();
        renderListOfBooks();
    })
    for (let butt of deleteButtons) {
        butt.addEventListener("click", e => {
            bookList.delete(butt.getAttribute("id"));
            renderListOfBooks();
        });
    }
}
