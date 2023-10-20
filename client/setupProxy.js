const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/auth/google', // The path you want to proxy (e.g., /auth/google)
    createProxyMiddleware({
      target: 'http://localhost:4000', // Replace with your backend server URL
      changeOrigin: true,
    })
  );
};
