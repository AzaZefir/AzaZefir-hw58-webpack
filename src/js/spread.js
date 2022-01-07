const firstUser = {
    name: 'aza',
    age: 23,
    width:33
};
const data = {
    color: 'yellow',
    goal: [],
    width: 40
};
const result = {
    name: 'aza',
    age: 23,
    color: 'yellow',
    goal: [],
    width: 40
};
const resultObject = {
    ...firstUser,
    ...data,
    newValue: 'new Value'
};
//const resultObject = Object.assign(data, result)
console.log(resultObject);


const firstArr = [232, 32, 34, 23, 3, 4, 23, 132, 23];
const secondArr = [234, 34, 5, 645, 756, 567, 56435, 45];

// const resArr = firstArr.concat(secondArr)
const resArr = [
    ...firstArr,
    ...secondArr
]
console.log(resArr);
