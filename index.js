let form = document.querySelector('form');
let emailInput = document.querySelector('input[type="email"]')
let passwordInput = document.querySelector('input[type="password"]')


form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(emailInput.value.length == 0 && emailInput.value == '') {
        alert('Enter email')
    } else if (passwordInput.value.length == 0 && passwordInput.value == '') {
        alert('Enter password')
    } else {
        alert('ფორმა დადასტურდა \nთქვენი მაილი არის: ' + emailInput.value + '\nთქვენი პასვორდი არის: ' + passwordInput.value)
    }
});