'use strict'
const ADMIN_PASSWORD = 'misha';
let massages;
const pass = prompt('введите пароль');

if (pass === null){
    massages = "Отменено пользователем!";
    } else if (pass === ADMIN_PASSWORD) {
      massages = "Добро пожаловать!" ;
    } else {
        massages = "Неверный пароль!";
       }
       alert(massages);


