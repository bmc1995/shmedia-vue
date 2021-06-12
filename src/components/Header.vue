<template>
  <div id="header">
    <div class="name">
      <router-link to="/">
        <span>Shmedia</span>
        <i class="fas fa-camera"></i>
      </router-link>
    </div>
    <div id="nav">
      <router-link to="/about">About</router-link> |
      <router-link to="/profile">Profile</router-link>
      <!-- <div v-if="!Auth.loading._value">
        <button v-if="!Auth.isAuthenticated._value" @click="login">
          Log in
        </button>
        <button v-if="Auth.isAuthenticated._value" @click="logout">
          Log out
        </button>
        <pre>{{ Auth }}</pre>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  // inject: ["Auth"],
  methods: {
    // login() {
    //   this.Auth.loginWithRedirect();
    // },
    // // Log the user out
    // logout() {
    //   this.Auth.logout({
    //     returnTo: window.location.origin,
    //   });
    // },
  },
};
</script>

<style scoped>
#header {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid black;
  background: #e6e6e6;
}
.fa-camera {
  margin-left: 10px;
}

.name {
  font-size: 2em;
  align-self: center;
}
.name a {
  text-decoration: none;
  color: inherit;
}
.name:active {
  color: #42b983;
}
.name #nav {
  align-self: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50ab;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
