let id = Symbol();

const user = {
    name: 'aza',
    age: 43,
    color: 'yellow',
    [id]: 'aza za za za za'
};
console.log(user);

// for (let key in user) {
//     console.log(user[key]);
// }

console.log(user[id]);


