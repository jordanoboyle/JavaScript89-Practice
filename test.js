


let order = 120;
let discount = 0.15;
let taxRate = 10;
let orderPlusDiscount = order - (order * discount)
console.log(orderPlusDiscount);

let total = (orderPlusDiscount + (orderPlusDiscount * (taxRate / 100)));

console.log(total);


