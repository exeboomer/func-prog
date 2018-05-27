// function add(x, y) {
//     return x + y;
// }

// // console.log(add(1, 2));

// function call(fn, ...args) {
//     return fn(...args);
// }

// let result = call(add, 1, 2);

// console.log(result);

// function ifElse(value, predicate, trueFn, falseFn) {
//     if (predicate(value)) {
//         trueFn();
//     } else {
//         falseFn();
//     }
// }


// ifElse(null, isNull, () => console.log(true), ()=> console.log(false)); 

function createLogger(fn) {
    return function logger(...args){
        return fn(...args);
    }
}

const log = createLogger(console.log);

log('hello');
