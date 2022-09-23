const devConfig = require('./webpack.config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const productionConfig = devConfig;
productionConfig.mode = 'production';
productionConfig.devtool = false;
// Deactivate "style-loader" for CSS files and SASS/SCSS files
// Because in build we want to extract CSS files to a separate file instead of letting js inject CSS
productionConfig.module.rules[0].use[0] = MiniCssExtractPlugin.loader; // subsititute "style-loader" with "mini-css-extract-plugin"
productionConfig.module.rules[1].use[0] = MiniCssExtractPlugin.loader; // subsititute "style-loader" with "mini-css-extract-plugin"
productionConfig.plugins.push(
    // Injects CSS to the HTML file during build..
    new MiniCssExtractPlugin({ filename: 'main.[hash].css' }),
);



module.exports = productionConfig;