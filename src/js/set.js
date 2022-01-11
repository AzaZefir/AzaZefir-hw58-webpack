const food = new Set();

food.add('banana');
food.add('apple');
food.add('strawberry');
food.add('potato');
food.add('potato');
food.add('potato');


food.delete('potato');
console.log(food.has('potato'));

// food.clear();

console.log(food);

for (let item of food) {
    console.log(item);
}

const data = [1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 67, 8, 5]

const d = new Set(data);
console.log(d);

console.log(d.size);

const weakSet = new WeakSet();

weakSet.add({name:'name'})

