<template>
    <div class="container py-5">
        <div class="jumbotron text-white jumbotron-image shadow" style="background-image: url(https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80);"><br>
        <h2 class="mb-4">
            Fashion is the armor to survive the reality of everyday life.
        </h2>
        <p class="mb-4">
            - BILL CUNNINGHAM -
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
                    <a @click.prevent="seeDetails(product.articles[0].code, product.images[0].url, product.price.formattedValue)" href="">
                        <img
                            :src="product.images[0].url"
                            class="card-img-top"
                            alt="..."
                        />
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">{{product.name}}</h5>
                        <p class="card-text">{{product.price.formattedValue}}</p>
                        <a href="#" title="Love it" class="btn"><span>&#x2764;</span></a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Pagination -->
        <div class="row">
            <div class="col-3"></div>
            <div class="col-6 mb-3 mt-3">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li class="page-item">
                        <a @click.prevent="handlePagination(products.pagination.currentPage - 1)" class="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                        </li>
                        <li class="page-item"><a @click.prevent="handlePagination(products.pagination.currentPage - 1)" class="page-link" href="#">{{products.pagination.currentPage}}</a></li>
                        <li class="page-item"><a @click.prevent="handlePagination(products.pagination.currentPage)" class="page-link" href="#">{{products.pagination.currentPage + 1}}</a></li>
                        <li class="page-item"><a @click.prevent="handlePagination(products.pagination.currentPage + 1)" class="page-link" href="#">{{products.pagination.currentPage + 2}}</a></li>
                        <li class="page-item">
                        <a @click.prevent="handlePagination(products.pagination.currentPage + 1)" class="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Main',
    data() {
        return {
            params: '?'
        }
    },
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
        },
        handlePagination(page) {
            if (page >= 0 && page < this.products.pagination.numberOfPages) {
                this.params += `page=${page}`;
                this.$store.dispatch('fetchProducts', this.params);
                this.params = '?';
            }
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