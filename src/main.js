import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(store).use(router).mount("#app");

// import Auth from "./auth";

// async function init() {
//   const AuthPlugin = await Auth.init({
//     onRedirectCallback: (appState) => {
//       router.push(
//         appState && appState.targetUrl
//           ? appState.targetUrl
//           : window.location.pathname
//       );
//     },
//   });

//   createApp(App).use(AuthPlugin).use(store).use(router).mount("#app");
// }
// init();
