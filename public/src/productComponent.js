Vue.component('products', {
    props: ["page"],
    data() {
        return {
            catalogUrl: `/catalogData.json`,
            products: [],
            filtered: [],
        }
    },
    methods: {
        filter(value) {
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted() {
        if (this.page === 'index') {
            this.$parent.getJson(`/api/products`)
                .then(data => {
                    for (let el of data.slice(0, 6)) {
                        el.imgPath = `products_img/catalog-card${el.id_product}.png`
                        this.products.push(el);
                        this.filtered.push(el);
                    }
                });
        } else {
            this.$parent.getJson(`/api/products`)
                .then(data => {
                    for (let el of data) {
                        el.imgPath = `products_img/catalog-card${el.id_product}.png`
                        this.products.push(el);
                        this.filtered.push(el);
                    }
                });
        }
    },
    template: ` <div class="products products-catalog">
                    <product v-for="item of filtered" 
                    :key="item.id_product" 
                    :img="item.imgPath"
                    :product="item"></product>
                </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: ` <div class="prod toCart">
                    <a href="product.html">
                        <img class="prod-pic" :src="img" alt="prod1">
                        <div class="prod-disc">
                            <h4 class="prod-h4">{{product.product_name}}</h4>
                            <p class="prod-discription">{{product.discription}}</p>
                            <p class="price">{{product.price}}$</p>
                        </div>
                    </a>
                    <div class="add-box">
                        <div class="add" @click="$root.$refs.cart.addProduct(product)">
                            <img src="img/add-pic.svg" alt="cart">
                            <p>Add to Cart</p>
                        </div>
                    </div>
                </div>`
})