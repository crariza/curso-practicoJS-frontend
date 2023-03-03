const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu") ;
const mobileMenu = document.querySelector(".mobile-menu");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const ShoppingCart = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
menuShoppingCart.addEventListener("click", toggleShoppingCart)

function toggleDesktopMenu () {
    const isShoppingCartOpen = !ShoppingCart.classList.contains("inactive");

    if (isShoppingCartOpen) {
        ShoppingCart.classList.add("inactive");
    }

    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu () {
    const isShoppingCartOpen = !ShoppingCart.classList.contains("inactive");

    if (isShoppingCartOpen) {
        ShoppingCart.classList.add("inactive");
    }

    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart() {
    const ismobileMenuOpen = !mobileMenu.classList.contains("inactive");
    const isDesktopMenuOpen = !desktopMenu.classList.contains("inactive");
    
    if (ismobileMenuOpen) {
        mobileMenu.classList.add("inactive");
    }
    if (isDesktopMenuOpen) {
        desktopMenu.classList.add("inactive");
    }

    ShoppingCart.classList.toggle("inactive");
}

const productList = [];

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "pantalla",
    price: 250,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

productList.push({
    name: "pc",
    price: 700,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function renderProducts (arr) {
    for (products of arr) {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", products.image);
    
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
    
        const productPrice = document.createElement("p");
        productPrice.innerText = `$ ${products.price}`;
    
        const productName = document.createElement("p");
        productName.innerText = products.name;
    
        const productInfoFigure = document.createElement("figure");
        const productCartImage = document.createElement("img");
        productCartImage.setAttribute("src","./icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productCartImage);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);



