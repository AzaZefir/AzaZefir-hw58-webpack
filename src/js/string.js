const str = 'str1';

const str2 = "str2";

const newStr = `str`;

const name = 'Aza';
const age = 50;

function getName() {
    return 'Azazaza'
}
//console.log('Hello, my name is ' + name + ' . I am ' + age + ' years old');

console.log(`Hello, my name is ${name} . I am ${10 + 10} years old ${getName()}`);


const html = `
<div> ${name}</div>
<div> ${age}</div>
`;

document.body.innerHTML = html;