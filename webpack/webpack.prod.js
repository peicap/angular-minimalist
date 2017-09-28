var path = require('path')
var merge = require('webpack-merge');
var common = require('./webpack.common.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
function root(__path) {
    return path.join(__dirname, __path)
}

module.exports = merge( common, {
    output: {
        path: root('dist'),
        filename: 'js/[name].js',
        chunkFilename: 'js/chunk/[id].chunk.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        // when using html 5 history api this will help navigate back to index.html for 404npm
        contentBase: './src',
        port: 4200,
        stats: {
            colors: true,
            chunks: true,
        }
    },
    plugins: [
        new ExtractTextPlugin('[name].css')
    ]
})