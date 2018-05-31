class ShoppingList {
    constructor(items = []) {
        this.items = items;
    }

    addItem(item) {
        this.items.push(item);
    }

    removeItems(...itemsToRemove) {
        for (let i = 0; i < itemsToRemove.length; i++) {
            let itemsToRemove = itemsToRemove[i];

            for (let j = 0; j < this.items.length; j++) {
                let item = this.items[j];

                if (item.title === itemsToRemove) {
                    this.items.splice(j, 1);
                }
            }
        }
    }
}

class Item {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
}

const shoppingList = new ShoppingList([
    new Item('Молоко', 100),
    new Item('Яйца', 70),
    new Item('Яблоки', 120)
]);

shoppingList.addItem(new Item('Бананы', 60));

let onDiet = true;
let isVegan = false;

if (onDiet) {
    shoppingList.removeItems('Бананы');
} else if (isVegan) {
    shoppingList.removeItems('Молоко', 'Яйца');
}

console.log(shoppingList);
