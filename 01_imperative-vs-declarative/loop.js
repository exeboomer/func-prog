const books = require('../books');

for (let i = 0; i < books.length; i++ ) {
    let book = books[i]; // императивная

    console.log(book); // декларативная
}

//более "декларативный"
for (let book of books) {
    console.log(book); 
}

//"декларативный"
books.forEach(book => console.log(book));