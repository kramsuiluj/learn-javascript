// regular function
// const calcArea = function(radius){
//     return 3.14 * radius**2;
// }

// arrow function
// There's no need to use parenthesis if there's only one parameter.

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// Short version if there's only one parameter and one return value.
// const calcArea = radius => 3.14 * radius**2;



// const area = calcArea(5);
// console.log('Area is:', area);

// Practice arrow functions

// const greet = function(){
//     return 'hello, world!';
// }

// const greet = () => 'hello, world!';
// console.log(greet());

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }

const bill = (products, tax) => {

    let total = 0;

    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }

    return total;

};

const total = bill([100, 200, 50], 0.2);
console.log(total);