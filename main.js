const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const menuIcon = document.querySelector(".menu") ;
const mobileMenu = document.querySelector(".mobile-menu");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const ShoppingCart = document.querySelector(".product-detail");


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

