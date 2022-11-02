const newUrl = document.querySelector('#newUrl');
newUrl.addEventListener('click', (event) => {
    prompt('Введите новый текст для ссылки');
    newUrl.textContent = 'DefaultUrl';
    event.preventDefault();
})