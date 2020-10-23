//###################    CLASSES  DECLARATION    ##############################

class Kernel {
    private prompt: string = "";
    private command: string = "type 'help' to help :)";
    private enterLine: Element;
    private program: Library;
    private tbody: Element;
    private readAndNotRead: Element;

    public powerOn = () => {
        this.tbody = document.getElementsByTagName("tbody")[0];
        this.readAndNotRead = document.getElementsByClassName("read")[0];
        document.addEventListener("keydown", e => {
            this.command +=
                e.keyCode >= 48 && e.keyCode < 112 || e.keyCode === 32
                    ? e.key
                    : "";
            if (e.keyCode === 8)
                this.command = this.command.substr(0, this.command.length - 1);
            this.setEnterLineText();
            if (e.key === "Enter"){
                this.execute(this.command);
                this.command = "";
                this.setEnterLineText();
            }
        });
        this.enterLine = document.getElementsByClassName("enterLine")[0];
        this.setEnterLineText();
    }

    public setEnterLineText(){
        this.enterLine.innerHTML = this.prompt + ">" + this.command;
    }
    public setPrompt(text: string){
        this.prompt = text;
    }

    public loadProgram(program: Library){
        this.program = program;
        this.rerenderList();
    }

    public execute(command: string) {
        if (!this.program.getInProgress()) {
            let workplace = document.getElementsByClassName("workplace")[0];
            let helpscreen = document.getElementsByClassName("helpscreen")[0];
            let unknownScreen = document.getElementsByClassName("unknownScreen")[0];

            let parsed = command.split(" ");
            let par;
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
                    unknownScreen.setAttribute("style", "display: block")
                    break;
            }
        } else
            this.setPrompt(this.program.setCommand(command));
        this.rerenderList();
    }

    private rerenderList(){
        this.tbody.innerHTML = "";
        this.readAndNotRead.innerHTML = `Read: ${this.program.getReadDone()}   Not read: ${this.program.getNotRead()}`;
        if (this.program.getBookList().getArraySize()){
            for (let i = 0; i < this.program.getBookList().getArraySize(); i++){
                let b = this.program.getBookList().getBook(i);
                this.addRowToTable(
                    this.tbody,
                    b.getTitle(),
                    b.getAuthor(),
                    b.getGenre(),
                    b.getRead(),
                    b.getReadDate(),
                    i);
            }
        }
    }
    private addRowToTable(element, title, author, genre, read, readDate, index) {
        element.insertAdjacentHTML("beforeend", `
            <tr>
                <td>${title}</td>
                <td>${author}</td>
                <td>${genre}</td>
                <td>${read ? "Done" : ""}</td>
                <td>${read ? readDate.toLocaleDateString() : ""}</td>
            </tr>
        `)
    }
}

interface Program {
    setInProgress(value: boolean);
    getInProgress(): boolean;
    setCommand(command: string);
}

class Library implements Program {
    private inProgress: boolean = false;
    private bookTitle: string;
    private bookAuthor: string;
    private bookGenre: string;

    private bookList: BookList = new BookList();

    public setInProgress(value: boolean){
        this.inProgress = value;
    }
    public getInProgress(): boolean {
        return this.inProgress;
    }
    public getBookList(): BookList {
        return this.bookList;
    }
    public getReadDone(): number {
        return this.bookList.getRead();
    }
    public getNotRead(): number {
        return this.bookList.getNotRead();
    }

    public setCommand(command: string): string {
        if (!this.bookTitle){
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
    }

    private storeBook(book: Book){
        this.bookList.add(book);
    }
    public next(){
        this.bookList.finishCurrentBook();
    }
    public prev(){
        this.bookList.getBack();
    }
    public toStart(){
        this.bookList.getStart();
    }
    public delete(index: number){
        this.bookList.delete(index);
    }
}

class BookList {
    private read: number = 0;
    private notRead: number = 0;
    private nextBookToReadIndex: number;
    private currentBookIndex: number;
    private lastBookRedIndex: number;
    private arrBooks: Book[] = [];

    public constructor() {
        this.initializeStartValues();
    }
    public getArraySize(): number {
        return this.arrBooks.length;
    }
    public getBook(index: number): Book {
        return this.arrBooks[index];
    }
    public getRead(): number {
        return this.read
    }
    public getNotRead(): number {
        return this.notRead
    }

    add(bookToAdd){
        debugger
        this.arrBooks.push(bookToAdd);
        this.notRead++;
        if (this.arrBooks.length === 1)
            this.currentBookIndex = 0;
        if (this.arrBooks.length === 2)
            this.nextBookToReadIndex = 1;
        if (this.currentBookIndex === null && this.lastBookRedIndex != null){
            this.currentBookIndex = this.lastBookRedIndex + 1;
        }
    };

    finishCurrentBook(){
        debugger
        if (this.currentBookIndex != null){
            this.arrBooks[this.currentBookIndex].setRead(true);
            if (this.arrBooks[this.currentBookIndex + 1]){
                this.currentBookIndex++;
                this.read++;
                this.notRead--;
                if (this.arrBooks[this.nextBookToReadIndex + 1]){
                    this.nextBookToReadIndex++;
                    this.lastBookRedIndex = this.currentBookIndex - 1;
                } else {
                    this.nextBookToReadIndex = null;
                    this.lastBookRedIndex = this.currentBookIndex - 1;
                }
            } else {
                this.lastBookRedIndex = this.currentBookIndex;
                this.currentBookIndex = null;
                this.read++;
                this.notRead--;
            }
        }
    };

    getBack(){
    };

    getStart(){
    };

    delete(index: number) {
        alert(index)
    };

    private initializeStartValues(){
        this.add(new Book("It", "Horror", "Stephen King"));
        this.add(new Book("Dark Tower", "Adventure", "Stephen King"));
        this.add(new Book("Harry Potter", "Thriller", "Joan K.Rolling"));
        this.add(new Book("Lord of the Rings", "Fantasy", "Tolkien"));
    }
}
class Book {
    private readonly title: string;
    private readonly genre: string;
    private readonly author: string;
    private read: boolean;
    private readDate: Date;

    public constructor(title: string, genre: string, author: string) {
        this.title = title;
        this.genre = genre;
        this.author = author;
    }

    setRead(isRed: boolean) {
        this.read = isRed;
        if (isRed)
            this.readDate = new Date(Date.now());
        else
            this.readDate = null;
    }

    public getTitle(): string {return this.title}
    public getGenre(): string {return this.genre}
    public getAuthor(): string {return this.author}
    public getRead(): boolean {return this.read}
    public getReadDate(): Date {return this.readDate}
}


//############################      START      #################################

let library: Library = new Library();
let kernel: Kernel = new Kernel();
kernel.powerOn();
kernel.loadProgram(library);
