const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
})

const alert_elem = document.querySelector('#alert_elem');

alert_elem.addEventListener('click', () => {
    alert('Служит для вывода предупреждения в консоль');
})

const prompt = document.querySelector('#prompt');

prompt.addEventListener('click', () => {
    alert('Служит для запроса данных пользователя');
})