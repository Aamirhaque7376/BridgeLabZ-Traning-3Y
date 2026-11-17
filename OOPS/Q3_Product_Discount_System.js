// Q3. Product Discount System (constructor function + prototype)

function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Shared method: it is stored on the prototype, not separately on every object.
Product.prototype.applyDiscount = function (percent) {
    if (percent < 0 || percent > 100) {
        throw new Error("Discount must be between 0 and 100.");
    }

    return this.price - (this.price * percent / 100);
};

const products = [
    new Product("Laptop", 50000),
    new Product("Headphones", 2000),
    new Product("Keyboard", 1500)
];

const discounts = [10, 20, 15];

products.forEach((product, index) => {
    const discountedPrice = product.applyDiscount(discounts[index]);
    console.log(
        `${product.name}: Original Rs. ${product.price}, ` +
        `${discounts[index]}% discount, New price Rs. ${discountedPrice.toFixed(2)}`
    );
});

// Abstraction: the user calls applyDiscount(percent) without needing to repeat
// the discount calculation formula each time.
