const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const filesToCopy = [
    {from: './node_modules/bootstrap/dist/css/bootstrap.min.css', to: 'styles/bootstrap.css'}
];

module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'lodash-es': 'lodash'
        }
    },
    plugins: [
        new CopyWebpackPlugin(filesToCopy),
        new ExtractTextPlugin('styles/app.css')
    ]
};
