<template>
  <div class="container py-5">
    <div
      class="jumbotron text-white jumbotron-image shadow"
      style="
        background-image: url(https://images.unsplash.com/photo-1552152974-19b9caf99137?fit=crop&w=1350&q=80);
      "
    >
      <br />
      <h2 class="mb-4">
        <br />
        Fashion is the armor to survive the reality of everyday life.
      </h2>
      <p class="mb-4">- BILL CUNNINGHAM -</p>
      <br /><br />
    </div>
    <br />

    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 mb-3 mt-3">
        <select
          v-model="currency"
          @change.prevent="changeCurrency"
          name=""
          id=""
        >
          <option value="">----- Select Currency -----</option>
          <option value="EUR">EUR</option>
          <option value="IDR">IDR</option>
          <option value="USD">USD</option>
        </select>
      </div>
      <div class="col-3"></div>
    </div>

    <!-- Card -->
    <div class="row d-flex justify-content-center align-items-center">
      <div
        v-for="product in products.results"
        :key="product.articles[0].code"
        class="card col-4 m-2 ml-3 mr-3 shadow"
        style="width: 18rem"
      >
        <div>
          <a
            @click.prevent="
              seeDetails(
                product.articles[0].code,
                product.images[0].url,
                product.price.formattedValue
              )
            "
            href=""
          >
            <img :src="product.images[0].url" class="card-img-top" alt="..." />
          </a>
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p v-if="currency === 'IDR'">
              Rp.
              {{
                (product.price.value * currentCurrency).toLocaleString("id-ID")
              }}
            </p>
            <p v-else-if="currency === 'EUR'">
              €
              {{
                (product.price.value * currentCurrency)
                  .toFixed(2)
                  .toLocaleString("en-GB")
              }}
            </p>
            <p v-else-if="currency === 'USD'">
              $
              {{
                (product.price.value * currentCurrency)
                  .toFixed(2)
                  .toLocaleString("en-US")
              }}
            </p>
            <p v-else class="card-text">{{ product.price.formattedValue }}</p>
            <a
              @click.prevent="
                addWishlist(
                  product.name,
                  product.price.value,
                  product.images[0].url,
                  product.articles[0].color.text,
                  product.articles[0].code
                )
              "
              href="#"
              title="Love it"
              class="btn"
              ><span>&#x2764;</span></a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- Pagination -->
    <div class="row">
      <div class="col-5"></div>
      <div class="col-2 mb-3 mt-3">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <a
                @click.prevent="
                  handlePagination(products.pagination.currentPage - 1)
                "
                class="page-link"
                href="#"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
                <span class="sr-only"></span>
              </a>
            </li>
            <li class="page-item">
              <a
                @click.prevent="
                  handlePagination(products.pagination.currentPage - 1)
                "
                class="page-link"
                href="#"
                >{{ products.pagination.currentPage }}</a
              >
            </li>
            <li class="page-item">
              <a
                @click.prevent="
                  handlePagination(products.pagination.currentPage)
                "
                class="page-link"
                href="#"
                >{{ products.pagination.currentPage + 1 }}</a
              >
            </li>
            <li class="page-item">
              <a
                @click.prevent="
                  handlePagination(products.pagination.currentPage + 1)
                "
                class="page-link"
                href="#"
                >{{ products.pagination.currentPage + 2 }}</a
              >
            </li>
            <li class="page-item">
              <a
                @click.prevent="
                  handlePagination(products.pagination.currentPage + 1)
                "
                class="page-link"
                href="#"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
                <span class="sr-only"></span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-5"></div>
    </div>
    <HFooter></HFooter>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";

export default {
  name: "Main",
  components: {
    HFooter,
  },
  data() {
    return {
      params: "?",
      currency: "",
    };
  },
  created() {
    this.$store.dispatch("fetchProducts");
  },
  computed: {
    products() {
      return this.$store.state.products;
    },
    currentCurrency() {
      return this.$store.state.currency;
    },
  },
  methods: {
    seeDetails(code, imageUrl, price) {
      this.$router.push(`details/${code}`);
      this.$store.dispatch("getDetails", { code, imageUrl, price });
      this.$store.commit("SET_IMAGEURL", imageUrl);
      this.$store.commit("SET_PRICE", price);
    },
    handlePagination(page) {
      if (page >= 0 && page < this.products.pagination.numberOfPages) {
        this.params += `page=${page}`;
        this.$store.dispatch("fetchProducts", this.params);
        this.params = "?";
      }
    },
    addWishlist(name, price, imageUrl, color, code) {
      const payload = { name, price, imageUrl, color, code };

      this.$store.dispatch("addToWishlist", payload);
    },
    changeCurrency() {
      const currency = this.currency;
      if (currency === "") {
        this.$store.commit("SET_CURRENCY", null);
      } else {
        this.$store.dispatch("getCurrency", currency);
      }
    },
  },
};
</script>

<style>
.jumbotron-image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
