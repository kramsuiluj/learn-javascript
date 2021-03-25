const link = document.querySelector('a');

console.log(link.getAttribute('href'));
link.setAttribute('href', 'https://www.thenetninja.co.uk');
link.innerText = 'The Net Ninja Website';

const message = document.querySelector('p');
console.log(message.getAttribute('class'));
message.setAttribute('class', 'success');
message.innerText = 'This is a success message';

message.setAttribute('style', 'color: red;');
// message.setAttribute('class', 'test');