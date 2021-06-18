import { createApp } from "vue";
import { OktaAuth } from "@okta/okta-auth-js";
import OktaVue from "@okta/okta-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import oktaConfig from "../auth_config";

const oktaAuth = new OktaAuth(oktaConfig.oidc);

createApp(App).use(OktaVue, { oktaAuth }).use(store).use(router).mount("#app");
