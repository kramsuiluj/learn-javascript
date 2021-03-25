// Adding and removing classes on an element.

// const content = document.querySelector('p');
// console.log(content.classList);
// content.classList.add('error');
// content.classList.remove('error');
// content.classList.add('success');

const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     if (para.innerText.includes('error')) {
//         para.classList.add('error');
//     } else if (para.innerText.includes('success')) {
//         para.classList.add('success');
//     } else {
//         para.classList.add('default');
//     }
// });

paras.forEach(para => {

    if (para.textContent.includes('error')) {

        para.classList.add('error');

    } else if (para.textContent.includes('success')) {

        para.classList.add('success');

    } else {
        
        para.classList.add('default');

    }

    console.log(para.textContent);

});



const title = document.querySelector('.title');

title.classList.toggle('test');
title.classList.toggle('test');