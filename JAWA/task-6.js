'use strict'
let input;
let total = 0;
while (input !== null){
    input = prompt('Введите число');
    if (Number.isNaN(Number (input))){
        alert('Введено не число попробуйте еще раз ');
    } else {
        total = total + Number(input);

    }
}
alert(`общая сума чисел равна ${total}`);








