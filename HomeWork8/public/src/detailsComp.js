Vue.component('details-comp', {
    template: `<details class="details-menu">
    <summary><img src="img/list-header.svg" alt="list"></summary>
    <div class="list-menu">
        <a href="#" class="close-lst"><img src="img/close-menu.svg" alt="close"></a>
        <h3 class="list-title">MENU</h3>
        <ul>
            <li class="lst-item-groop hidden-item">
                <a href="registration.html">
                    <h4>REGISTRATION</h4>
                </a>
            </li>
            <li class="lst-item-groop hidden-item">
                <a href="Cart.html">
                    <h4>CART</h4>
                </a>
            </li>
            <li class="lst-item-groop">
                <h4>MAN</h4>
                <ul class="list-menu-in-list">
                    <li class="lst-item"><a href="catalog.html">Accessories</a></li>
                    <li class="lst-item"><a href="catalog.html">Bags</a></li>
                    <li class="lst-item"><a href="catalog.html">Denim</a></li>
                    <li class="lst-item"><a href="catalog.html">T-Shirts</a></li>
                </ul>
            </li>
            <li class="lst-item-groop">
                <h4>WOMAN</h4>
                <ul class="list-menu-in-list">
                    <li class="lst-item"><a href="catalog.html">Accessories</a></li>
                    <li class="lst-item"><a href="catalog.html">Jackets & Coats</a></li>
                    <li class="lst-item"><a href="catalog.html">Polos</a></li>
                    <li class="lst-item"><a href="catalog.html">T-Shirts</a></li>
                    <li class="lst-item"><a href="catalog.html">Shirts</a></li>
                </ul>
            </li>
            <li class="lst-item-groop">
                <h4>KIDS</h4>
                <ul class="list-menu-in-list">
                    <li class="lst-item"><a href="catalog.html">Accessories</a></li>
                    <li class="lst-item"><a href="catalog.html">Jackets & Coats</a></li>
                    <li class="lst-item"><a href="catalog.html">Polos</a></li>
                    <li class="lst-item"><a href="catalog.html">T-Shirts</a></li>
                    <li class="lst-item"><a href="catalog.html">Shirts</a></li>
                    <li class="lst-item"><a href="catalog.html">Bags</a></li>
                </ul>
            </li>
        </ul>
    </div>
</details>`
})