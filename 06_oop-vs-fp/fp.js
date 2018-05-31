function addItem(list, item) {
    return list.concat(item);

}

function removeItems(list, ...items) {
    return list.filter(item => !items.includes(item.title));
}

const shoppingList = [
    { title: 'Молоко', price: 100},
    { title: 'Яйца', price: 70},
    { title: 'Яблоки', price: 120},
];

    const newShoppingList = addItem(shoppingList, {title: 'бананы', price: 60 });

    const dietList = removeItems(shoppingList, 'бананы');
    const veganList = removeItems(shoppingList, 'молоко', 'яйца');

    const shoppingListDoublePrice = shoppingList.map(item => {
        return {
            ...item,
            price: item.price * 2
        };
    });

    console.log('double', shoppingListDoublePrice)
    console.log('standart', shoppingList);