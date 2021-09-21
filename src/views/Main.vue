<template>
    <div class="container py-5">
        <div class="jumbotron text-white jumbotron-image shadow" style="background-image: url(https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80);"><br>
        <h2 class="mb-4">
            Jumbotron with background image
        </h2>
        <p class="mb-4">
            Hey, check this out.
        </p>
        <br><br><br>
        </div><br>

        <div class="row">
            <div class="col-3"></div>
            <div class="col-6 mb-3 mt-3">
                <select name="" id="">
                    <option value="">----- Select Currency -----</option>
                    <option value="">EUR</option>
                    <option value="">IDR</option>
                </select>
            </div>
            <div class="col-3"></div>
        </div>

        <!-- Card -->
        <div class="row d-flex justify-content-center align-items-center">
            <div v-for="product in products.results" :key="product.articles.code" class="card col-4 m-2 ml-3 mr-3 shadow" style="width: 18rem">
                <div>
                    <img
                        :src="product.images[0].url"
                        class="card-img-top"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                        <p class="card-text">{{product.price.formattedValue}}</p>
                        <a @click.prevent="seeDetails(product.articles[0].code, product.images[0].url, product.price.formattedValue)" href="#" class="btn btn-primary">See Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main',
    created() {
        this.$store.dispatch('fetchProducts')
    },
    computed: {
        products() {
            return this.$store.state.products
        }
    },
    methods: {
        seeDetails(code, imageUrl, price) {
            this.$router.push(`details/${code}`)
            this.$store.dispatch('getDetails', {code, imageUrl, price})
            this.$store.commit('SET_IMAGEURL', imageUrl)
            this.$store.commit('SET_PRICE', price)
        }
    }
}
</script>

<style>
.jumbotron-image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>