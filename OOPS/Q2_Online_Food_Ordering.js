// Q2. Online Food Ordering (map + reduce + error handling)

const menu = [
    { name: "Pizza", price: 250 },
    { name: "Burger", price: 120 },
    { name: "Pasta", price: 180 },
    { name: "Sandwich", price: 100 }
];

function calculateBill(orderItems) {
    // Find each ordered item's price. An unknown item causes an error.
    const priceList = orderItems.map((orderedName) => {
        const item = menu.find(
            (menuItem) => menuItem.name.toLowerCase() === orderedName.toLowerCase()
        );

        if (!item) {
            throw new Error(`"${orderedName}" is not available on the menu.`);
        }

        return item.price;
    });

    return priceList.reduce((total, price) => total + price, 0);
}

try {
    const order = ["Pizza", "Burger", "Pasta"];
    console.log(`Order: ${order.join(", ")}`);
    console.log(`Total bill: Rs. ${calculateBill(order)}`);
} catch (error) {
    console.log(`Unable to place order: ${error.message}`);
}

try {
    const invalidOrder = ["Pizza", "Sushi"];
    console.log(`Total bill: Rs. ${calculateBill(invalidOrder)}`);
} catch (error) {
    console.log(`Unable to place order: ${error.message}`);
}
