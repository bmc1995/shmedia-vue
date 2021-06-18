<template>
  <div id="header">
    <div class="name">
      <router-link to="/">
        <img src="../testImages/shmediaLogoHeaderV1.png" alt="Shmedia logo" />
        <!-- <span>Shmedia</span>
        <i class="fas fa-camera"></i> -->
      </router-link>
    </div>
    <div id="nav">
      <div v-if="authState.isAuthenticated">
        <router-link to="/about">About</router-link>
        |
        <router-link to="/profile">Profile</router-link>
        |
        <button @click="logout">Log out</button>
      </div>
      <router-link to="/authenticate">
        <button v-if="!authState.isAuthenticated">Log in</button>
      </router-link>
    </div>
  </div>
  <router-view />
</template>

<script>
// import Header from "./components/Header.vue";
import config from "../auth_config";
export default {
  name: "App",

  methods: {
    async logout() {
      // Read idToken before local session is cleared
      const idToken = await this.$auth.getIdToken();
      // Clear local session
      await this.$auth.signOut();
      // Clear remote session
      window.location.href = `${config.oidc.issuer}/v1/logout?id_token_hint=${idToken}&post_logout_redirect_uri=http://localhost:8080`;
    },
  },
};
</script>

<style>
body {
  margin: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
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
