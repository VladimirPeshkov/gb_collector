const { resolve } = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const  { CleanWebpackPlugin }  =  require ( 'clean-webpack-plugin' );
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: resolve(__dirname, 'src/js/main.js'),
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'dist')
    },

    devServer: {
        port: 8080,
    },

    plugins: [
        new HTMLWebpackPlugin({template: resolve(__dirname, 'src/index.html')}),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({filename: '[name].[contenthash].css'})
    ],

    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|mp3)$/i,
                use: 'file-loader'
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },

            { 
                test: /\\.s[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader']
            }
        ]
    }

}