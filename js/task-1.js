function makeTransaction(quantity, pricePerDroid) {
  return `You picked ${quantity}, price per item is ${pricePerDroid} credits`;
}

console.log(makeTransaction(5, 3000));
console.log(makeTransaction(3, 1000));
console.log(makeTransaction(10, 500));
