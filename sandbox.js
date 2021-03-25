// document object model

// const para = document.querySelector('p'); // Getting the first p tag in the heirarchy.
// const para = document.querySelector('.error'); // Getting any element with the class of '.error'
// const para = document.querySelector('div.error'); // Getting the specific element with the class of '.error'

/* Note:Getting the unique selector of an element.

1. Right click the HTML element in the browser then click inspect.
2. Right click the highlighted line of code then click copy and choose copy selector.

*/

// console.log(para);

// const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error');

// paras.forEach(para => {

//     console.log(para);

// });

// console.log(paras[0]);

// console.log(errors);

errors.forEach(error => {
    console.log(error);
});
