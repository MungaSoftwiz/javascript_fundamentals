#!/usr/bin/env node


class Bookshelf {
    constructor() {
        this.favoriteBooks = [];
    }
    
    addFavoriteBook(bookName) {
        if (!bookName.includes("Great")) {
            this.favoriteBooks.push(bookName);
        }
    }

    printFavoriteBooks() {
        console.log(`Favorite Books: ${ String(this.favoriteBooks.length) }`);
        for (let bookName of this.favoriteBooks) {
            console.log(bookName);
        }
    }
}

function LoadBooks(theBookshelf) {
    fakeAJAX(BOOK_API, function onBooks(bookNames){
        for (let bookName of bookNames) {
            theBookshelf.addFavoriteBook(bookName);
        }
        theBookshelf.printFavoriteBooks();
    });
}

var BOOK_API = "thhps://some.url/api";

var myBooks = new Bookshelf();
LoadBooks(myBooks);


function fakeAJAX(url, cb) {
    setTimeout(function fakeLoadingDelay(){
        cb([
            "The Great Gatsby",
            "Sometimes a Great Nation",
            "The Millionaire Next Door",
            "The Outlier",
            "The Magic of Thinking Big"
        ]);
    }, 500);
}
//addFavoriteBook("");
//addFavoriteBook();
//addFavoriteBook();
//addFavoriteBook();
//addFavoriteBook();
//printFavoriteBooks();