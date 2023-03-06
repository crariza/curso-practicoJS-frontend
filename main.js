const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu") ;
const productAsideClose = document.querySelector(".product-aside-close");
const mobileMenu = document.querySelector(".mobile-menu");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const ShoppingCart = document.querySelector(".product-detail");
const cardsContainer = document.querySelector(".cards-container");
const productAside = document.querySelector(".product-aside");
const productAsideDiv = document.getElementById("pd-aside");


menuEmail.addEventListener("click", toggleDesktopMenu);
menuIcon.addEventListener("click", toggleMobileMenu);
menuShoppingCart.addEventListener("click", toggleShoppingCart);
productAsideClose.addEventListener("click", closeProductAside);

function toggleDesktopMenu () {
    desktopMenu.classList.toggle("inactive");
    productAside.classList.add("inactive");
    ShoppingCart.classList.add("inactive");
}

function toggleMobileMenu () {
    mobileMenu.classList.toggle("inactive");
    productAside.classList.add("inactive");
    ShoppingCart.classList.add("inactive");
}

function toggleShoppingCart() {
    ShoppingCart.classList.toggle("inactive");
    productAside.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}


function closeProductAside(){
    productAside.classList.add("inactive");
    ShoppingCart.classList.add("inactive");
    desktopMenu.classList.add("inactive");
    mobileMenu.classList.add("inactive");
}

function openProductAside () {
    productAside.classList.remove("inactive");
}


const productList = [];

productList.push({
    name: "bike",
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    descritpion: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
});

productList.push({
    name: "pantalla",
    price: 250,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    descritpion: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
});

productList.push({
    name: "pc",
    price: 700,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    descritpion: "With its practical position, this bike also fulfills a decorative function, add your hall or workspace."
});


function renderProducts (arr) {
    arr.forEach(products => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
    
        const productImg = document.createElement("img");
        productImg.setAttribute("src", products.image);
        productImg.addEventListener("click", openProductAside);
    
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
    }); 
}

renderProducts(productList);
// function showProducts(product){
//     productAside.classList.remove("inactive");

//     const asideImage = document.createElement("img");
//     asideImage.setAttribute("src", product.image)

//     const asidePrice = document.createElement("p");
//     asidePrice.innerText = `$ ${product.price}`;

//     const asideName = document.createElement("p");
//     asideName.innerText = product.name;

//     const asideDescription = document.createElement("p");
//     asideDescription.innerText = product.descritpion;

//     productAsideDiv.append(asidePrice,asideName,asideDescription);

//     console.log(product)
    
// }





