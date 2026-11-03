// Q6 – E-Commerce Dashboard: Product Card Fetcher
// Run with Node.js 18+ (which includes global fetch) or in a modern browser.

async function loadProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }

        const products = await response.json();

        products.forEach(product => {
            console.log(`Product: ${product.title}`);
            console.log(`Price: $${product.price}`);
            console.log(`Image: ${product.image}`);
            console.log("------------------------------");
        });

        // Optional browser bonus: create product cards if #product-container exists.
        if (typeof document !== "undefined") {
            const container = document.getElementById("product-container");

            if (container) {
                container.innerHTML = "";

                products.forEach(product => {
                    const card = document.createElement("article");
                    const title = document.createElement("h3");
                    const price = document.createElement("p");
                    const image = document.createElement("img");

                    title.textContent = product.title;
                    price.textContent = `$${product.price}`;
                    image.src = product.image;
                    image.alt = product.title;
                    image.style.width = "120px";

                    card.append(image, title, price);
                    container.appendChild(card);
                });
            }
        }
    } catch (error) {
        console.error("Failed to load products. Please try again.", error);
    }
}

loadProducts();
