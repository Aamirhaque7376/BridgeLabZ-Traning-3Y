// Q6: Progressive Discount System
// Sample purchase amount; change it to test different discount tiers.
const originalTotal = 6500;
let discountPercentage = 0;

if (originalTotal >= 10000) {
    discountPercentage = 25;
} else if (originalTotal >= 5000) {
    discountPercentage = 15;
} else if (originalTotal >= 2000) {
    discountPercentage = 5;
}

const discountAmount = originalTotal * discountPercentage / 100;
const finalPrice = Math.round(originalTotal - discountAmount);

console.log(`Original total: ₹${Math.round(originalTotal)}`);
console.log(`Discount percentage: ${discountPercentage}%`);
console.log(`Discount amount: ₹${Math.round(discountAmount)}`);
console.log(`Final price after discount: ₹${finalPrice}`);
