const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack-common.config.js');

module.exports = merge(common, {
    entry: {
        app: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server'
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: [
                    path.join(__dirname, 'src')
                ],
                loader: 'react-hot!babel'
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        // redirect 404s to index
        historyApiFallback: true,
        proxy: {
            '/api/*': {
                target: 'http://127.0.0.1:10000',
                secure: false
            }
        }

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __ROOT_CONTEXT__: '"/"'
        })
    ]
});
