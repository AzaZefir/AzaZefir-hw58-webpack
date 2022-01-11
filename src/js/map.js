const user = new Map();
const func = () => { alert('hi') };
const obj = { name: 'aza' };
const arr = [1, 2, 3];

user.set('name', 'aza');
user.set(func, 'function');
user.set(obj, { value: 5 });
user.set(arr, [3, 4, 5]);
user.set('5', [3, 3, 3]);

// console.log(user.get(func));
// console.log(user.get(obj));
// console.log(user.get(arr));
// console.log(user.get('5'));


// console.log(user.size);

//методы Map
//keys
//values
//entries


for (let k of user.keys()) {
    // console.log(k);
}

for (let y of user.values()) {
    // console.log(y);
}

for (let e of user.entries()) {
    // console.log(e);
}

const animal = new Map([
    ['country', 'kg'],
    ['city', 'bish']
]);
// console.log(animal);

user.forEach((value, key, map) => {
    // console.log(value);
})

// user.delete(func);
// console.log(user);


// console.log(user.has(obj));
// user.clear();

// console.log(user);


let weakMap = new WeakMap();

weakMap.set({ someValue: 'any' }, 'any')
//ЕСТЬ
//set
//delete
//has
//get

//НЕТ
//clear
//forEach
//size