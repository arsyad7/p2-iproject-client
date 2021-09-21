<template>
  <section>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div class="container">
                <a class="navbar-brand" href="#">
                    <img src="https://www.hacktiv8.com/images/logo/hacktiv8-light.png" alt="..." height="36">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a @click.prevent="goToHome" class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li v-if="token" class="nav-item">
                            <a @click.prevent="goToWishlist" class="nav-link" href="#">Wishlists</a>
                        </li>
                        <li v-if="token" class="nav-item">
                            <a @click.prevent="logout" class="nav-link" href="#">Sign Out</a>
                        </li>
                        <li v-else class="nav-item">
                            <a @click.prevent="goToLogin" class="nav-link" href="#">Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </section>
</template>

<script>
export default {
    name: 'navbar',
    methods: {
        goToHome() {
            this.$router.push({name: 'Home'})
        },
        goToLogin() {
            this.$router.push({name: 'Login'})
        },
        logout() {
            localStorage.clear()
            this.$store.commit('SET_ISLOGGEDIN', false)
            this.$router.push('/login')
        },
        goToWishlist() {
            this.$router.push({name: 'Wishlist'})
        }
    },
    computed: {
        token() {
            return this.$store.state.isLoggedIn
        }
    }
}
</script>

<style>

</style>