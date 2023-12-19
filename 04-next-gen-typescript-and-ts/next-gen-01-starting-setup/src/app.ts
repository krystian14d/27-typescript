// const userName = 'Max';

// userName = 'Maximilian';
// let age = 30;

// age = 29;

// function add(a: number, b: number){
//   var result;
//   result = a + b;
//   return result;
// }

// const add = (a: number, b: number) => {
//   return a + b;
// };

// console.log(add(2, 5));

// const printOutput = (output: string | number) => console.log(output);

// const button = document.querySelector('button');

// if (button) {
//   button.addEventListener('click', (event) => console.log(event));
// }

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

console.log(activeHobbies.push(...hobbies));

const person = {
  firstName: 'Max',
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age);
