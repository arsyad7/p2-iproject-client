<template>
  <div class="container w-75">
    <div class="row d-flex mt-4 p-2 border rounded">
      <div class="col">
        <img class="w-100" src="../assets/register.jpg" alt="" />
      </div>
      <div class="col bg-light rounded text-white">
        <form @submit.prevent="handleRegister">
          <br />
          <h1 style="color: black">Register</h1>
          <div class="mb-3">
            <label
              style="color: black"
              for="exampleInputEmail1"
              class="form-label"
              >Username</label
            >
            <input
              v-model="username"
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
            />
          </div>
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
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    handleRegister() {
      const payload = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      this.$store
        .dispatch("register", payload)
        .then(() => {
          this.$router.push({ name: "Login" });
        })
        .catch((err) => {
          console.log(err.response.data.message);
          swal("Error!", `${err.response.data.message}`, "error");
        });
    },
  },
};
</script>

<style></style>
