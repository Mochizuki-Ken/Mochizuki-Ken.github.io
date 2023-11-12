const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin=require("terser-webpack-plugin")
const MiniCssExtractPlugin=require('mini-css-extract-plugin')

module.exports = {

    entry: './src/index.js',

    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.js'
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new TerserWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename:'index.css'
        })
    ],
    devtool:'source-map',

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                        }
                }
            },{
                
                test:/\.css$/,
                use: [
                    // "style-loader",
                    MiniCssExtractPlugin.loader,
                    {
                      loader: "css-loader",
                      options: {
                        modules: {
                          localIdentName: "[local]",
                        },
                      },
                    },
                ]
            },{
                test:/\.png$/,
                type:'asset/resource'
            }
        ]
        
    },
    devServer:{
        port:3000
        ,historyApiFallback:true
    }

}