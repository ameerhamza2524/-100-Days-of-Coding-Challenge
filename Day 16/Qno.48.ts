let pricesSet1 = [30000, 10500, 11000];
let pricesSet2 = [12000, 13000, 16020];
let combinedPrices = [...pricesSet1, ...pricesSet2].sort((a, b) => a - b);
console.log(combinedPrices);