let form = document.querySelector('form');
let input = document.querySelector('input');
let text = document.querySelector('#duplicateField');

input.addEventListener('keypress', (event) => {
    text.textContent = text.textContent + event.key;
});

form.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(text.textContent);
    text.textContent = '';
    form.reset();
});