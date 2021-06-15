export default {
  oidc: {
    clientId: "0oa10e6tp63UHQV2L5d7",
    issuer: "https://dev-35416340.okta.com/oauth2/default",
    redirectUri: "http://localhost:8080/login/callback",
    scopes: ["openid", "profile", "email"],
    pkce: true,
    testing: {
      disableHttpsCheck: true,
    },
  },
  resourceServer: {
    messagesUrl: "http://localhost:8000/api/messages",
  },
};
