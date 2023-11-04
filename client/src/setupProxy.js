const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth/google/callback', // This is the path that the proxy will apply to.
    createProxyMiddleware({
      target: 'http://localhost:4000', // The target host to which the traffic will be proxied.
      changeOrigin: true, // This is necessary for virtual hosted sites.
      // No pathRewrite needed if the backend service expects the same path.
    })
  );
};
