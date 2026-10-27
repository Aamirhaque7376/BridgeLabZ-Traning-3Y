// Q1: E-Commerce Product Manager — Classes + Objects
"use strict";

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // Apply a percentage discount and return the discounted price.
  applyDiscount(percent) {
    if (percent < 0 || percent > 100) throw new Error("Discount must be between 0 and 100.");
    this.price = Number((this.price * (1 - percent / 100)).toFixed(2));
    return this.price;
  }

  // Return product details as a formatted string.
  getDetails() {
    return `ID: ${this.id} | Name: ${this.name} | Price: ₹${this.price.toFixed(2)} | Category: ${this.category}`;
  }
}

const products = [
  new Product(1, "Wireless Headphones", 1800, "Electronics"),
  new Product(2, "Notebook", 120, "Stationery"),
  new Product(3, "Keyboard", 1250, "Electronics"),
  new Product(4, "Water Bottle", 650, "Accessories"),
  new Product(5, "Backpack", 1450, "Accessories")
];

// Example discount: apply a 10% discount to the first product.
products[0].applyDiscount(10);
console.log("All products:", products.map(product => product.getDetails()));

document.getElementById("showProducts").addEventListener("click", () => {
  const expensiveProducts = products.filter(product => product.price > 1000);
  document.getElementById("productsOutput").textContent =
    expensiveProducts.length
      ? expensiveProducts.map(product => product.getDetails()).join("\n")
      : "No products cost more than ₹1000.";
  console.table(expensiveProducts);
});
