const para = document.querySelector('p');

// console.log(para.innerText);
// para.innerText = 'I am awesome.';

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += ' new text';
// });

const content = document.querySelector('.content');

// console.log(content.innerHTML);
// content.innerHTML += '<h2>This is a new H2!</h2>';

const people = ['mario', 'luigi', 'yoshi'];

people.forEach(person => {

    content.innerHTML += `<li>${person}</li>`;

});