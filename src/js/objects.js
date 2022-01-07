const name = 'aza';
const age = 23;


function getName() {
    return this.name;
}

function returnDynamicValue() {
    return 'dinamicValue';
}


const user = {
    name,
    age,
    get info() {
        return`Hello my name is${name} i am ${age}`
    },
    set info(str) {
        alert(str);
    },
    getName,
    getAge() {
        return this.age;
    },
    [1 + 1]: 2,
    [returnDynamicValue()]: 'dinamicValue'
}

console.log(user);
console.log(user.info);
console.log(user.info = 'another new text');
console.log(user.getName());
console.log(user.getAge());