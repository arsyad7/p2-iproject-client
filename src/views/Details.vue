<template>
  <div class="row">
      <div class="col-6 mb-4">
            <div class="mdb-lightbox">
                <div class="row product-gallery mx-1">
                    <div class="col-12 mb-0">
                        <figure class="view overlay rounded z-depth-1 main-img">
                        <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                            data-size="710x823">
                            <img :src="product.imageUrl"
                            class="img-fluid z-depth-1" width="500" height="500">
                        </a>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
      <div class="col-5 mr-5">
          <br><br><br>
          <h5>{{product.name}}</h5>
      <p class="mb-2 text-muted text-uppercase small">Shirts</p>
      <p><span class="mr-1"><strong>{{product.price}}</strong></span></p>
      <p class="pt-1">{{product.description}}.</p>
      <div class="table-responsive">
        <table class="table table-sm table-borderless mb-0">
          <tbody>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Model</strong></th>
              <td>{{product.fits[0]}}</td>
            </tr>
            <tr>
              <th class="pl-0 w-25" scope="row"><strong>Color</strong></th>
              <td>{{product.color.text}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr>
      <button type="button" class="btn btn-light btn-md mr-1 mb-2"><i
          class="fas fa-shopping-cart pr-2"></i>Add to Wishlist</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Details',
    created() {
        const code = this.$route.params.code;
        this.$store.dispatch('getDetails', code)
    },
    computed: {
        product() {
            return this.$store.state.details
        },
        imageUrl() {
            return this.$store.state.imageUrl
        }
    }
}
</script>

<style>

</style>