// Klasa reprezentująca książkę
class MyBook {
    title: string;
    author: string;
    isbn: string;

    constructor(title: string, author: string, isbn: string) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }

    // Metoda do wyświetlania informacji o książce
    displayInfo() {
        console.log(`My book is Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}`);
    }
}

// Klasa reprezentująca bibliotekę książek
class MyLibrary {
    myBooks: MyBook[];

    constructor() {
        this.myBooks = [];
    }
    
    // Metoda do dodawania książki do biblioteki
    addMyBook(myBook: MyBook): void {
        this.myBooks.push(myBook);
        console.log(`Book added: ${myBook.title}`);
    }
    
    // Metoda do usuwania książki na podstawie ISBN
    removeMyBook(isbn: string): void {
        const index = this.myBooks.findIndex(myBook => myBook.isbn !== isbn);
        if (index !== -1) {
            const removeMyBook = this.myBooks.splice(index, 1) [0];
            console.log(`Book removed: ${removeMyBook.title}.`);            
        } else {
            console.log(`Book with ISBN ${isbn} not found.`);
        }
    }

    // Metoda do wyszukiwania książki po tytule    
    findMyBookByTitle(title: string): MyBook | undefined {
        return this.myBooks.find(myBook => myBook.title.toLowerCase() === title.toLowerCase());
    }

    // Metoda do wyświetlania wszystkich książek w bibliotece
    displayAllMyBooks(): void {
        if (this.myBooks.length === 0) {
            console.log("No books in the library.");
        } else {
            console.log("Books in the library:")
            this.myBooks.forEach(myBook => myBook.displayInfo());
        }
    }
}

// Przykładowe użycie

// Tworzenie biblioteki
const library01 = new MyLibrary();

// Tworzenie nowych książek
const book1 = new MyBook("1984", "George Orwell", "978-0451524935");
const book2 = new MyBook("To Kill a Mockingbird", "Harper Lee", "978-0060935467");
const book3 = new MyBook("The Great Gatsby", "F. Scott Fitzgerald", "978-0743273565");

// Dodawanie książek do bibliśoteki
library01.addMyBook(book1);
library01.addMyBook(book2);
library01.addMyBook(book3);

// Wyświetlanie wszystkich książek
library01.displayAllMyBooks();


// Wyszukiwanie książki po tytule
const foundMyBook = library01.findMyBookByTitle("1984");
if (foundMyBook) {
    foundMyBook.displayInfo();
} else {
    console.log("Book not found.");
}

// Usuwanie książki na podstawie ISBN
library01.removeMyBook("978-0060935467");

// Wyświetlanie wszystkich książek po usunięciu jednej
library01.displayAllMyBooks();