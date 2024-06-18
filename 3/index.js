const jacketPrice = +document.querySelector('.jacket').innerHTML;
const skirtPrice = +document.querySelector('.skirt').innerHTML;
const jeansPrice = +document.querySelector('.jeans').innerHTML;
const shoesPrice = +document.querySelector('.shoes').innerHTML;
const shirtPrice = +document.querySelector('.shirt').innerHTML;


console.log(jacketPrice)

let totalPrice = jacketPrice + skirtPrice + jeansPrice + shoesPrice + shirtPrice;
console.log(totalPrice)

const result = document.querySelector('.total_price');

result.textContent = totalPrice + " rub."

let discountBtn = document.querySelector('.discount_btn');

let resultDiscount = totalPrice - (totalPrice * 20 / 100);

function discount() {  
  result.textContent = resultDiscount + " rub"; 
}

discountBtn.addEventListener('click', discount);