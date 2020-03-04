"use strict";
const credits = 23580;
const pricePerDroid = 3000;
const dronNumber = prompt("количество дроидов которые пользователь хочет купить");
let totalPrice;
if (dronNumber === null) {
  console.log("Отменено пользователем!");
} else {
  totalPrice = pricePerDroid * Number(dronNumber);
  if (credits < totalPrice) {
    console.log("Недостаточно средств на счету!");
  } else {
    const sum = credits - totalPrice;
    console.log(`Вы купили ${dronNumber} дроидов, на счету осталось ${sum} кредитов.`);
  }
}
