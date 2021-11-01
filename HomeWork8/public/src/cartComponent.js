Vue.component('cart', {
    data() {
        return {
            showCart: true,
            cartItems: [],

        }
    },
    methods: {
        addProduct(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if (find) {
                this.$parent.putJson(`/api/cart/${ product.id_product }/${ product.product_name }`, { quantity: 1 })
                    .then(data => {
                        if (data.result) {
                            find.quantity++;
                        }
                    })
            } else {
                let prod = Object.assign({ quantity: 1 }, product);
                this.$parent.postJson(`api/cart/${ product.id_product }/${ product.product_name }`, prod)
                    .then(data => {
                        if (data.result) {
                            this.cartItems.push(prod);
                        }
                    })
            }
        },
        remove(product) {
            if (product.quantity > 1) {
                this.$parent.putJson(`/api/cart/${ product.id_product }/${ product.product_name }`, { quantity: -1 })
                    .then(data => {
                        if (data.result) {
                            product.quantity--;
                        }
                    })
            } else {
                this.$parent.delJson(`/api/cart/${ product.id_product }/${ product.product_name }`, product)
                    .then(data => {
                        if (data.result) {
                            this.cartItems.splice(this.cartItems.indexOf(product), 1);
                        } else {
                            console.log('error');
                        }
                    })
            }
        },
    },
    mounted() {
        this.$parent.getJson(`/api/cart`)
            .then(data => {
                for (let el of data.contents) {
                    // el.imgPath = `products_img/catalog-card${el.id_product}.png`
                    this.cartItems.push(el)
                }
                console.log(this.cartItems)
            });
    },
    template: `
                <a class="header-right-pos-rel">
                    <a href="Cart.html">
                        <img src="img/bascket.png" alt="bascket">
                        <p class="quantityOfProducts">{{cartItems.length}}</p>
                    </a>
                    <div class="cart-block cartInfo" v-show="showCart">
                        <p v-if="!cartItems.length">В корзине нет товаров</p>
                        <cart-item 
                            v-for="item of cartItems" 
                            :key="item.id_product"
                            :cart-item="item"
                            :img="item.imgPath"
                            @remove="remove"></cart-item>
                    </div>
                </a>`
});
Vue.component('cart-item', {
    props: ['cartItem', 'img'],
    template: `<div class="cart-item">
                <div class="product-bio">
                    <img class='img-cart-item' :src="img" alt="Some image">
                    <div class="product-desc">
                        <p class="product-title">{{cartItem.product_name}}</p>
                        <p class="product-quantity">Количество: {{cartItem.quantity}}</p>
                        <p class="product-single-price">{{cartItem.price}} руб. за шт.</p>
                        <button class="del-btn" @click="$emit('remove', cartItem)">&times;</button>
                    </div>
                </div>
                <div class="right-block">
                    <p class="product-price">Всего: {{cartItem.quantity*cartItem.price}} руб.</p>
                </div>
            </div>`
})