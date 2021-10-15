Vue.component('cart-main', {
    template: `
    <div class="items_in_card">
    <cart-main-item 
        v-for="item of $root.$refs.cart.cartItems" 
        :key="item.id_product"
        :cartItem="item"
        :img="item.imgPath"
        @remove="$root.$refs.cart.remove"></cart-main-item>
<div class="clear_or_continue">
<a href="#" class="button_clear button_clear-left">CLEAR SHOPPING CART</a>
<a href="catalog.html" class="button_clear">CONTINUE SHOPPING</a>
</div>
</div>`
});
Vue.component('cart-main-item', {
    props: ['cartItem', 'img'],
    template: `
                <div class="item_in_cart">
                    <img class="cart-img" :src="img" alt="Some image">
                    <div class="item_in_cart_dicription">
                        <h4 class="cart_ite_name">{{cartItem.product_name}}</h4>
                        <div class="disc_details">
                            <p>Price: <span class="disc_details_span">{{cartItem.price}}$</span></p>
                            <p>Quantity: {{cartItem.quantity}}</p>
                            <p>total price: {{cartItem.quantity*cartItem.price}}</p>
                        </div>
                    </div>
                    <a href="#" @click="$emit('remove', cartItem)" class="close_item_in_cart"><img src="img/close-menu.svg" alt="close"></a>
                </div>`
})