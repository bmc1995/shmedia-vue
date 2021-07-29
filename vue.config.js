module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/shmedia-vue/" : "/",

  //uncomment below to enable settings for localhost ssl. you need to enable unsigned localhost for chrome afaik as well.
  // const fs = require("fs");
  // devServer: {
  //   https: {
  //     key: fs.readFileSync("../../../example.key"),
  //     cert: fs.readFileSync("../../../example.crt"),
  //   },
  //   public: "localhost:8080",
  //   disableHostCheck: true,
  // },
};
