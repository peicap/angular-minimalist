var webpack = require('webpack')
var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    // Entry file to begin bundle
    entry: {
        "polyfills": './src/polyfills.ts',
        "vendors": './src/vendors.ts',
        "main": "./src/main.ts",
        "styles": "./src/global.scss"
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
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.scss$/,
                exclude: [ /node_modules/, root('src', 'global.scss') ],
                use: [ 'to-string-loader', 'css-loader', 'sass-loader' ]
            },
            {
                test: /global\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader'
                })
            },
        ],
    },
    plugins: [
        //htmWebpackPlugin - will generate index.html and insert the bundle inside
        new htmlWebpackPlugin({
            inject: true,
            template: './src/index.html'
        }),
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators for Windows and MacOS
            /(.+)?angular(\\|\/)core(.+)?/,
            path.join(__dirname, 'src'), // location of your src
            {} // a map of your routes 
          ),
    ]
}

/**
 * Shortcut for Path
 * @param {*} ___path 
 */

function root(__path) {
    return path.join(__dirname, __path)
}