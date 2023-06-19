module.exports = {
  lintOnSave: false,
  devServer: {
    port: 6060,
    disableHostCheck: true,
    proxy: {
      "/api/operation/api": {
        target: "https://admin-nxdev1.hashkeydev.com",
        changeOrigin: true,
        secure: false,
        cookieDomainRewrite: "localhost",
      },
      "/api": {
        target: "https://opm.test1.obibiz.com/",
        changeOrigin: true,
        cookieDomainRewrite: "localhost",
        headers: {
          authority: "https://opm.test1.obibiz.com/",
          "x-forwarded-host": "https://opm.test1.obibiz.com/",
          Referer: "https://opm.test1.obibiz.com/",
        },
      },
    },
  },
};
