// object literal notations

let user = {

    name: 'diana',
    age: 21,
    email: 'diana@gmail.com',
    location: 'Philippines',
    blogs: ['why mac & cheese rules', '10 things to make with marmite']

};

// console.log(user);
// console.log(user.name);

// user.age = 22;
// console.log(user.age);

const key = 'location';

console.log(user[key]);
user['name'] = 'gazelle';
console.log(user['name']);

console.log(typeof user);