const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: './src/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devtool: "source-map",
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: 'body',
            minify: false
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader",
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'images',
                        },
                    },
                ],
            },
            // Tag-C CSS becomes pard of js bundle file, no need for css-loader.. alternate wat of doing it
            // npm install --save-dev style-loader
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader'],
            // },
        ],
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
    }
};