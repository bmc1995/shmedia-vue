import { createApp } from "vue";
import { OktaAuth } from "@okta/okta-auth-js";
import OktaVue from "@okta/okta-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import oktaConfig from "../auth_config";

const oktaAuth = new OktaAuth(oktaConfig.oidc);

createApp(App).use(OktaVue, { oktaAuth }).use(store).use(router).mount("#app");

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
