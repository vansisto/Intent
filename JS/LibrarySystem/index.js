//###################    CLASSES  DECLARATION    ##############################
var Kernel = /** @class */ (function () {
    function Kernel() {
        var _this = this;
        this.prompt = "";
        this.command = "type 'help' to help :)";
        this.powerOn = function () {
            _this.tbody = document.getElementsByTagName("tbody")[0];
            _this.readAndNotRead = document.getElementsByClassName("read")[0];
            document.addEventListener("keydown", function (e) {
                _this.command +=
                    e.keyCode >= 48 && e.keyCode < 112 || e.keyCode === 32
                        ? e.key
                        : "";
                if (e.keyCode === 8)
                    _this.command = _this.command.substr(0, _this.command.length - 1);
                _this.setEnterLineText();
                if (e.key === "Enter") {
                    _this.execute(_this.command);
                    _this.command = "";
                    _this.setEnterLineText();
                }
            });
            _this.enterLine = document.getElementsByClassName("enterLine")[0];
            _this.setEnterLineText();
        };
    }
    Kernel.prototype.setEnterLineText = function () {
        this.enterLine.innerHTML = this.prompt + ">" + this.command;
    };
    Kernel.prototype.setPrompt = function (text) {
        this.prompt = text;
    };
    Kernel.prototype.loadProgram = function (program) {
        this.program = program;
        this.rerenderList();
    };
    Kernel.prototype.execute = function (command) {
        if (!this.program.getInProgress()) {
            var workplace = document.getElementsByClassName("workplace")[0];
            var helpscreen = document.getElementsByClassName("helpscreen")[0];
            var unknownScreen = document.getElementsByClassName("unknownScreen")[0];
            var parsed = command.split(" ");
            var par = void 0;
            if (parsed.length > 1)
                par = parsed[0] === "delete" ? Number(parsed[1]) : null;
            switch (command) {
                case "":
                    workplace.setAttribute("style", "display: block");
                    helpscreen.setAttribute("style", "display: none");
                    unknownScreen.setAttribute("style", "display: none");
                    break;
                case "help":
                    workplace.setAttribute("style", "display: none");
                    helpscreen.setAttribute("style", "display: block");
                    break;
                case "add":
                    this.program.setInProgress(true);
                    this.setPrompt("Enter title ");
                    break;
                case "next":
                    this.program.next();
                    break;
                case "prev":
                    this.program.prev();
                    break;
                case "to start":
                    this.program.toStart();
                    break;
                case parsed[0] + " " + par:
                    this.program.delete(par);
                    break;
                default:
                    workplace.setAttribute("style", "display: none");
                    unknownScreen.setAttribute("style", "display: block");
                    break;
            }
        }
        else
            this.setPrompt(this.program.setCommand(command));
        this.rerenderList();
    };
    Kernel.prototype.rerenderList = function () {
        this.tbody.innerHTML = "";
        this.readAndNotRead.innerHTML = "Read: " + this.program.getReadDone() + "   Not read: " + this.program.getNotRead();
        if (this.program.getBookList().getArraySize()) {
            for (var i = 0; i < this.program.getBookList().getArraySize(); i++) {
                var b = this.program.getBookList().getBook(i);
                this.addRowToTable(this.tbody, b.getTitle(), b.getAuthor(), b.getGenre(), b.getRead(), b.getReadDate(), i);
            }
        }
    };
    Kernel.prototype.addRowToTable = function (element, title, author, genre, read, readDate, index) {
        element.insertAdjacentHTML("beforeend", "\n            <tr>\n                <td>" + title + "</td>\n                <td>" + author + "</td>\n                <td>" + genre + "</td>\n                <td>" + (read ? "Done" : "") + "</td>\n                <td>" + (read ? readDate.toLocaleDateString() : "") + "</td>\n            </tr>\n        ");
    };
    return Kernel;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.inProgress = false;
        this.bookList = new BookList();
    }
    Library.prototype.setInProgress = function (value) {
        this.inProgress = value;
    };
    Library.prototype.getInProgress = function () {
        return this.inProgress;
    };
    Library.prototype.getBookList = function () {
        return this.bookList;
    };
    Library.prototype.getReadDone = function () {
        return this.bookList.getRead();
    };
    Library.prototype.getNotRead = function () {
        return this.bookList.getNotRead();
    };
    Library.prototype.setCommand = function (command) {
        if (!this.bookTitle) {
            this.bookTitle = command;
            return "Enter author ";
        }
        else if (!this.bookAuthor) {
            this.bookAuthor = command;
            return "Enter genre ";
        }
        else if (!this.bookGenre) {
            this.bookGenre = command;
            this.inProgress = false;
            this.storeBook(new Book(this.bookTitle, this.bookGenre, this.bookAuthor));
            this.bookTitle = null;
            this.bookAuthor = null;
            this.bookGenre = null;
            return "";
        }
    };
    Library.prototype.storeBook = function (book) {
        this.bookList.add(book);
    };
    Library.prototype.next = function () {
        this.bookList.finishCurrentBook();
    };
    Library.prototype.prev = function () {
        this.bookList.getBack();
    };
    Library.prototype.toStart = function () {
        this.bookList.getStart();
    };
    Library.prototype.delete = function (index) {
        this.bookList.delete(index);
    };
    return Library;
}());
var BookList = /** @class */ (function () {
    function BookList() {
        this.read = 0;
        this.notRead = 0;
        this.arrBooks = [];
        this.initializeStartValues();
    }
    BookList.prototype.getArraySize = function () {
        return this.arrBooks.length;
    };
    BookList.prototype.getBook = function (index) {
        return this.arrBooks[index];
    };
    BookList.prototype.getRead = function () {
        return this.read;
    };
    BookList.prototype.getNotRead = function () {
        return this.notRead;
    };
    BookList.prototype.add = function (bookToAdd) {
        debugger;
        this.arrBooks.push(bookToAdd);
        this.notRead++;
        if (this.arrBooks.length === 1)
            this.currentBookIndex = 0;
        if (this.arrBooks.length === 2)
            this.nextBookToReadIndex = 1;
        if (this.currentBookIndex === null && this.lastBookRedIndex != null) {
            this.currentBookIndex = this.lastBookRedIndex + 1;
        }
    };
    ;
    BookList.prototype.finishCurrentBook = function () {
        debugger;
        if (this.currentBookIndex != null) {
            this.arrBooks[this.currentBookIndex].setRead(true);
            if (this.arrBooks[this.currentBookIndex + 1]) {
                this.currentBookIndex++;
                this.read++;
                this.notRead--;
                if (this.arrBooks[this.nextBookToReadIndex + 1]) {
                    this.nextBookToReadIndex++;
                    this.lastBookRedIndex = this.currentBookIndex - 1;
                }
                else {
                    this.nextBookToReadIndex = null;
                    this.lastBookRedIndex = this.currentBookIndex - 1;
                }
            }
            else {
                this.lastBookRedIndex = this.currentBookIndex;
                this.currentBookIndex = null;
                this.read++;
                this.notRead--;
            }
        }
    };
    ;
    BookList.prototype.getBack = function () {
    };
    ;
    BookList.prototype.getStart = function () {
    };
    ;
    BookList.prototype.delete = function (index) {
        alert(index);
    };
    ;
    BookList.prototype.initializeStartValues = function () {
        this.add(new Book("It", "Horror", "Stephen King"));
        this.add(new Book("Dark Tower", "Adventure", "Stephen King"));
        this.add(new Book("Harry Potter", "Thriller", "Joan K.Rolling"));
        this.add(new Book("Lord of the Rings", "Fantasy", "Tolkien"));
    };
    return BookList;
}());
var Book = /** @class */ (function () {
    function Book(title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
    }
    Book.prototype.setRead = function (isRed) {
        this.read = isRed;
        if (isRed)
            this.readDate = new Date(Date.now());
        else
            this.readDate = null;
    };
    Book.prototype.getTitle = function () { return this.title; };
    Book.prototype.getGenre = function () { return this.genre; };
    Book.prototype.getAuthor = function () { return this.author; };
    Book.prototype.getRead = function () { return this.read; };
    Book.prototype.getReadDate = function () { return this.readDate; };
    return Book;
}());
//############################      START      #################################
var library = new Library();
var kernel = new Kernel();
kernel.powerOn();
kernel.loadProgram(library);
