<template>
  <div class="container">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="card col-4 m-2 shadow" style="width: 18rem">
        <div>
          <img
            src="https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F15%2F0b%2F150bd88f23e72ca3a28acfa46a3e7bc30879654c.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_trousers_dressed%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">test</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              @click.prevent="$emit('delete', id)"
              href="#"
              class="btn btn-primary"
              >Delete</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
