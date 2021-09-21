<template>
  <div class="container w-75">
        <div class="row d-flex mt-4 p-2 border rounded">
          <div class="col">
            <img class="w-100" src="../assets/login.png" alt="" />
          </div>
          <div class="col bg-light rounded text-white">
            <form @submit.prevent="handleLogin">
              <br>
              <h1 style="color: black">Sign In</h1>
              <div class="mb-3">
                <label style="color: black" for="exampleInputEmail1" class="form-label"
                  >Email address</label
                >
                <input
                    v-model="email"
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" class="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div class="mb-3">
                <label style="color: black" for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                    v-model="password"
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>