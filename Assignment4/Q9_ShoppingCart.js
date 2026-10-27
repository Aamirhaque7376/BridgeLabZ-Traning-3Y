// Q9: Shopping Cart Total — Classes + RegExp for Coupon
"use strict";

class Cart {
  constructor() {
    this.items = [];
    this.discountPercent = 0;
  }

  addItem(name, price, quantity) {
    if (!name.trim() || !Number.isFinite(price) || price <= 0 ||
        !Number.isInteger(quantity) || quantity < 1) {
      throw new Error("Enter a name, a positive price, and a whole quantity of at least 1.");
    }
    this.items.push({ name: name.trim(), price, quantity });
  }

  getTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  applyCoupon(code) {
    // Coupon codes follow SAVE20 or DISC10 format; suffix gives discount percentage.
    const match = /^(SAVE|DISC)(10|20)$/.exec(code.trim().toUpperCase());
    if (!match) return false;
    this.discountPercent = Number(match[2]);
    return true;
  }

  getFinalTotal() {
    return this.getTotal() * (1 - this.discountPercent / 100);
  }
}

const cart = new Cart();
const currency = amount => `₹${amount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

function renderCart() {
  const itemsOutput = document.getElementById("cartItemsOutput");
  itemsOutput.textContent = cart.items.length
    ? cart.items.map(item => `${item.name} — ${currency(item.price)} × ${item.quantity} = ${currency(item.price * item.quantity)}`).join("\n")
    : "Your cart is empty.";
  document.getElementById("cartSubtotal").textContent = currency(cart.getTotal());
  document.getElementById("cartFinalTotal").textContent =
    `Final total after ${cart.discountPercent}% discount: ${currency(cart.getFinalTotal())}`;
}

document.getElementById("cartItemForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("itemName").value;
  const price = Number(document.getElementById("itemPrice").value);
  const quantity = Number(document.getElementById("itemQuantity").value);
  try {
    cart.addItem(name, price, quantity);
    renderCart();
    event.target.reset();
    document.getElementById("itemQuantity").value = "1";
  } catch (error) {
    alert(error.message);
  }
});

document.getElementById("couponForm").addEventListener("submit", event => {
  event.preventDefault();
  const code = document.getElementById("couponCode").value;
  const message = document.getElementById("couponMessage");
  if (cart.applyCoupon(code)) {
    message.textContent = `Coupon applied: ${cart.discountPercent}% discount.`;
    message.className = "success";
  } else {
    message.textContent = "Invalid coupon. Use SAVE10, SAVE20, DISC10, or DISC20.";
    message.className = "error";
  }
  renderCart();
});
renderCart();
