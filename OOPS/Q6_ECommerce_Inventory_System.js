// Q6. E-Commerce Inventory System (filter + sort + reduce)

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
    { id: 2, name: "Mouse", category: "Electronics", price: 700, stock: 15 },
    { id: 3, name: "T-Shirt", category: "Clothing", price: 500, stock: 4 },
    { id: 4, name: "Jeans", category: "Clothing", price: 1200, stock: 10 },
    { id: 5, name: "Notebook", category: "Stationery", price: 80, stock: 2 },
    { id: 6, name: "Pen Pack", category: "Stationery", price: 100, stock: 30 }
];

function getLowStockProducts(productList) {
    // Low stock is defined here as fewer than 5 units.
    return productList.filter((product) => product.stock < 5);
}

function sortProductsByPrice(productList) {
    // Copy first so the original array is not changed.
    return [...productList].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue(productList) {
    return productList.reduce(
        (total, product) => total + product.price * product.stock,
        0
    );
}

function groupByCategory(productList) {
    return productList.reduce((groups, product) => {
        if (!groups[product.category]) {
            groups[product.category] = [];
        }

        groups[product.category].push(product);
        return groups;
    }, {});
}

console.log("Low stock products:");
console.log(getLowStockProducts(products));

console.log("\\nProducts sorted by price (low to high):");
console.log(sortProductsByPrice(products));

console.log(`\\nTotal inventory value: Rs. ${calculateTotalInventoryValue(products)}`);

console.log("\\nProducts grouped by category:");
console.log(groupByCategory(products));
