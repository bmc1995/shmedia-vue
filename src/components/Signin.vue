<template>
  <div class="login">
    <div id="okta-signin-container"></div>
  </div>
</template>

<script>
import OktaSignIn from "@okta/okta-signin-widget";
import "@okta/okta-signin-widget/dist/css/okta-sign-in.min.css";
import config from "../../auth_config";

export default {
  name: "Login",
  mounted: function () {
    this.$nextTick(function () {
      const { issuer, clientId, redirectUri, scopes, testing } = config.oidc;
      this.widget = new OktaSignIn({
        /**
         * Note: when using the Sign-In Widget for an OIDC flow, it still
         * needs to be configured with the base URL for your Okta Org. Here
         * we derive it from the given issuer for convenience.
         */
        baseUrl: issuer.split("/oauth2")[0],
        clientId,
        redirectUri,
        testing,
        // eslint-disable-next-line no-undef
        logo: require("../../testImages/shmediaLogoHeaderV1.png"),
        i18n: {
          en: {
            "primaryauth.title": "Sign in to Shmedia",
          },
        },
        authParams: {
          issuer,
          scopes,
        },
        features: {
          registration: true,
        },
      });
      this.widget
        .showSignInToGetTokens({
          el: "#okta-signin-container",
          scopes,
        })
        .then((tokens) => {
          this.$auth.handleLoginRedirect(tokens);
        })
        .catch((err) => {
          throw err;
        });
    });
  },
  unmounted() {
    // Remove the widget from the DOM on path change
    this.widget.remove();
  },
};
</script>
