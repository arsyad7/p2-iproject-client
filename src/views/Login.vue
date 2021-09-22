<template>
  <div class="container w-75">
    <div class="row d-flex mt-4 p-2 border rounded">
      <div class="col">
        <img class="w-100" src="../assets/login.png" alt="" />
      </div>
      <div class="col bg-light rounded text-white">
        <form @submit.prevent="handleLogin">
          <br />
          <h1 style="color: black">Sign In</h1>
          <div class="mb-3">
            <label
              style="color: black"
              for="exampleInputEmail1"
              class="form-label"
              >Email address</label
            >
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label
              style="color: black"
              for="exampleInputPassword1"
              class="form-label"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button><br /><br>
          <div class=" text-center">
            <GoogleLogin :params="params" :renderParams="renderParams" :onSuccess="onSuccess" :onFailure="onFailure"></GoogleLogin>
          </div><br>
          <p style="color: black">
            Dont have an account?
            <a @click.prevent="goToRegister" href="">register</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import GoogleLogin from 'vue-google-login';

export default {
  name: "Login",
  components: {
      GoogleLogin
  },
  data() {
    return {
      email: "",
      password: "",
      params: {
          client_id: "690332269320-50q1jkq7850ars5t6uk9oo81i31ocfvr.apps.googleusercontent.com"
      },
      renderParams: {
          width: 200,
          longtitle: true
      }
    };
  },
  methods: {
    handleLogin() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      this.$store
        .dispatch("login", payload)
        .then((resp) => {
          localStorage.setItem("access_token", resp.data.access_token);
          this.$store.commit("SET_ISLOGGEDIN", true);
          swal("Welcome!!", "Login Success", "success");
          this.$router.push({ name: "Home" });
        })
        .catch((err) => {
          swal("Error!", `${err.response.data.message}`, "error");
        });
    },
    goToRegister() {
      this.$router.push("/register");
    },
    onSuccess(googleUser) {
      this.$store.dispatch('signInGoogle', googleUser)
      .then(resp => {
          localStorage.setItem(
              "access_token",
              resp.data.access_token
          );
          this.$store.commit("SET_ISLOGGEDIN", true);
          swal("Welcome!!", "Login Success", "success");
          this.$router.push({ name: "Home" });
      })
      .catch(err => {
          swal("Error!", `${err.response.data.message}`, "error");
      })
    },
    onFailure(){},
  },
};
</script>

<style>
.abcRioButton {
    margin: 0 auto;
}
</style>
