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
                /**
                 * to-string-loader - In some cases (e.g. Angular2 @View styles definition) you need to have style as a string. 
                 * You can cast the require output to a string, e.g.
                 * css-loader - The css-loader interprets @import and url() like import/require() and will resolve them.
                 * sass-loader - Compiles sass to CSS
                 */
                test: /\.scss$/,
                exclude: [/node_modules/, root('src', 'global.scss')],
                use: ['to-string-loader', 'css-loader', 'sass-loader']
            },
            {
                /**
                 * Extract global scss file
                 */
                test: /global\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!sass-loader'
                })
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
            root('src'), // location of your src
            {}
        ),
    ],
}

function root(__path) {
    return path.join(__dirname, __path)
}