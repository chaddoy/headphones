const withCSS = require('@zeit/next-css')
const wcss = withCSS({
  cssLoaderOptions: {
    url: false
  }
});

module.exports = {
  target : 'serverless',
  ...wcss
};