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
                        <a @click.prevent="$emit('delete', id)" href="#" class="btn btn-primary">Delete</a>
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