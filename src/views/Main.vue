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
                        <a @click.prevent="$emit('delete', id)" href="#" class="btn btn-primary">Delete</a>
                    </div>
                </div>
            </div>
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
                        <a @click.prevent="$emit('delete', id)" href="#" class="btn btn-primary">Delete</a>
                    </div>
                </div>
            </div>
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
                        <a @click.prevent="$emit('delete', id)" href="#" class="btn btn-primary">Delete</a>
                    </div>
                </div>
            </div>
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
                        <a @click.prevent="$emit('delete', id)" href="#" class="btn btn-primary">Delete</a>
                    </div>
                </div>
            </div>
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
                        <a @click.prevent="$emit('delete', id)" href="#" class="btn btn-primary">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.jumbotron-image {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>