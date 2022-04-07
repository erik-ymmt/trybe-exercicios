//cost of production
const cost = 11;
//value on the market
const price = 25;
//number of products sold
let sales = 1000;
//cost after taxes of 20%
let costAfterTaxes = cost + (cost*0.2);
let profit = 0;

//checking for valid values
if (cost < 0 || price < 0) {
    console.log('Error - invalid value(s). They must be positive numbers')
} else {
    //calculates the profit
    profit = (sales) * (price - costAfterTaxes);
}
//prints the profit
console.log(profit);