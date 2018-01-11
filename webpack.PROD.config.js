const merge = require('webpack-merge');

const globalConfig = require('./webpack.GLOBAL.config.js');

module.exports = module.exports = merge(globalConfig, {
    output: {
        path: `${__dirname}/public`,
        publicPath: '/public',
        filename: 'bundle.js'
    }
});
