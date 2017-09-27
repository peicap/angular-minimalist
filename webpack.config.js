var webpack = require('webpack')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // Entry file to begin bundle
    entry: "./src/main.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        /**
         * Tell webpack to automatically resolve extension
         * Meaning > import * from "my-component"
         * No need to specify .ts extensions
         */
        extensions: ['.ts', '.js']
    },
    module: {
        // Loaders 
        rules: [
            {
                /**
                 * awesome-typescript-loader is used to transpile ts files
                 * to js.
                 * angular2-template-loader is used for metadata in components
                 * to inline template and styles with statements
                 */
                test: /\.ts$/,
                loader: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
            /**
             * raw-loader will handle all require(var.html | var.css) statements created 
             * by the angular2-template-loader and change it to plain text
             */
                test: /\.(css|html)$/,
                loader: 'raw-loader',
                exclude: [root('./src/index.html')] // don't include root index.html
            }
        ],
    },
    plugins: [
        //htmWebpackPlugin - will generate index.html and insert the bundle inside
        new htmlWebpackPlugin({
            template: './src/index.html'
        }),
        new webpack.ContextReplacementPlugin(
            /**
             * fix for webpack warnings - angular issue 11580
             */
             // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)@angular/,
            root('./src'), // location of your src
            {}
        )
    ],
    devServer: {
        // when using html 5 history api this will help navigate back to index.html for 404
        historyApiFallback: true
    }
}

function root(__path) {
    return path.join(__dirname, __path)
}