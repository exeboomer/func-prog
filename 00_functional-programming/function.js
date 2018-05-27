function add(x, y) { // чистая функция
    return x + y;
}

function random(x) { //не чистая функция
    return Math.random() * x; // используется значение из внешнего окружения + возвращает разные значения
}

function getDate() {//не чистая функция, не принимает ничего
    return new Date.now(); // возвращает разные значения
}

function save(data) { // не чистая
    localStorage.set('data', data); //данные из вне + не возвращает ничего
}

{
    let cart = {
        items: [],

        add(item) {
            this.items.push(item);
        }
    };

    cart.add('apple');
}

{
    let cart = {
        items: [],

        add(item) {
            this.items = items.concat(item);
            return items;
        }
    };

    let items = cart.add('apple');
}