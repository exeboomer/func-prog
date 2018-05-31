const books = require('../books');

let booksByTopic = books.reduce((store, book) => {
    if (!Array.isArray(store[book.topic])) {
        store[book.topic] = [];
    }

    store[book.topic].push(book);

    return store;
}, {});

console.log(booksByTopic);