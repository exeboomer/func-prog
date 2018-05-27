function add(x, y) {
    return x + y;
}

function multiply (x, y) {
    return x * y;
}

//let result = add(multiply(3, 4), 2);

function compose(fn1, fn2) {
    return function(x, ...args) {
        return fn2(fn1(...args), x);
    }
}

function pipe(fn1, fn2) {
    return function(x, ...args) {
        return fn1(fn2(...args), x);
    }
}
const addtiply = pipe(multiply, add);

let result = addtiply(3, 4, 5);

console.log(result);