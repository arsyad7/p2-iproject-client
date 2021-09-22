<template>
  <div class="container py-5">
        <!-- Card -->
        <div class="row d-flex justify-content-center align-items-center">
            <div v-for="product in wishlists" :key="product.id" class="card col-4 m-2 ml-3 mr-3 shadow" style="width: 18rem">
                <div>
                    <a @click.prevent="seeDetails(product.code, product.imageUrl, product.price)" href="">
                        <img
                            :src="product.imageUrl"
                            class="card-img-top"
                            alt="..."
                        />
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                        <p class="card-text">{{product.color}}</p>
                        <p class="card-text">{{product.price}}</p>
                        <!-- <a href="#" title="Love it" class="btn"><span>&#x2764;</span></a> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Wishlist',
    created() {
        this.$store.dispatch('fetchWishlists')
    },
    computed: {
        wishlists() {
            return this.$store.state.wishlists
        }
    }, 
    methods: {
        seeDetails(code, imageUrl, price) {
            this.$router.push(`details/${code}`)
            this.$store.dispatch('getDetails', {code, imageUrl, price})
            this.$store.commit('SET_IMAGEURL', imageUrl)
            this.$store.commit('SET_PRICE', price)
        },
    }
}
</script>

<style>
.btn {
  box-shadow: 1px 1px 0 rgba(255,255,255,0.5) inset;
  border-radius: 3px;
  border: 1px solid;
  display: inline-block;
  height: 18px;
  line-height: 18px;
  padding: 0 8px;
  position: relative;

  font-size: 12px;
  text-decoration: none;
  text-shadow: 0 1px 0 rgba(255,255,255,0.5);
}
</style>