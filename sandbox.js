// Primitive Values

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// Reference Values

const userOne = { name: 'ryu', age: 30 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne['age'] = 40;
userOne.name = 'Diana';
console.log(userOne, userTwo);