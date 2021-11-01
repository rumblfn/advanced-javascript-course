Vue.component('filter-el', {
    data() {
        return {
            userSearch: ''
        }
    },
    template: `<form action="#" class="search-form" @submit.prevent="$parent.$refs.products.filter(userSearch)">
                <button type="submit" class="btn-search">
                    <i class="fas fa-search"></i>
                </button>
                <input type="text" class="search-field" v-model="userSearch">
            </form>`
})