const products = [
    {
        name: "Laptop",
        price: 50000,
        img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400"
    },
    {
        name: "Mobile",
        price: 20000,
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400"
    },
    {
        name: "Headphones",
        price: 2000,
        img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
        name: "Watch",
        price: 3000,
        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
        name: "Camera",
        price: 25000,
        img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400"
    },
   {
    name: "Shoes",
    price: 4000,
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
}
];
let cart = [];

function loadProducts() {
    let html = "";

    products.forEach((p, i) => {
        html += `
        <div class="card">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${i})">Add to Cart</button>
        </div>
        `;
    });

    document.getElementById("products").innerHTML = html;
}

function addToCart(index) {
    cart.push(products[index]);
    displayCart();
}

function displayCart() {
    let html = "";
    let total = 0;

    cart.forEach((item, i) => {
        total += item.price;

        html += `
        <li>
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${i})">❌</button>
        </li>
        `;
    });

    document.getElementById("cart").innerHTML = html;
    document.getElementById("total").innerText = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    displayCart();
}

loadProducts();

function checkout() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    let total = 0;
    cart.forEach(item => total += item.price);

    document.getElementById("totalItems").innerText =
        "Total Items: " + cart.length;

    document.getElementById("finalAmount").innerText =
        "Total Amount: ₹" + total;

    document.getElementById("resultPage").style.display = "block";
}