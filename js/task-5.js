'user strict'
let country;
let price;
let massage;
country = prompt('Введите страну');

switch (country.toLowerCase()) {
    case 'china':
        price = 100;
        massage = (`Доставка в ${country}  будет стоить ${price} кредитов`);
        break;
    case 'chili':
        price = 250;
        massage = (`Доставка в ${country}  будет стоить ${price} кредитов`)
         break;
    case 'australia':
        price = 170;
        massage = (`Доставка в ${country}  будет стоить ${price} кредитов`)
        break;
    case 'india':
        price = 80;
        massage = (`Доставка в ${country}  будет стоить ${price} кредитов`)
        break;
    case 'jamaica':
        prise = 120; 
        massage = (`Доставка в ${country}  будет стоить ${price} кредитов`)
        break;   
        default:
      massage='В ввашей стране доставка недоступна';
}
alert(massage);
