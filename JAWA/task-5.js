'user strict'
let country;
let price;
country = prompt('Введите страну');

switch (country.toLowerCase()) {
    case 'china':
        price = 100;
        break;
    case 'chili':
        price = 250;
         break;
    case 'australia':
        price = 170;
        break;
    case 'india':
        price = 80;
        break;
    case 'jamaica':
        prise = 120; 
        break;   
        default:
      alert('В ввашей стране доставка недоступна');
}
alert(`Доставка в ${country}  будет стоить ${price} кредитов`);
