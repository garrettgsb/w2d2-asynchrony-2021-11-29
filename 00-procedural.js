const totalBill = 83.50;
const taxRate = 0.14;
const diners = [
  "Alice",
  "Bob",
  "Carol",
  "Dean",
];

function chooseRandomDiner(diners) {
  const randomIndex = Math.floor(Math.random() * diners.length);
  return diners[randomIndex];
}
console.log(`${chooseRandomDiner(diners)} will get the bill, which comes to ${totalBill * (1 + taxRate)}, plus the tip.`);
