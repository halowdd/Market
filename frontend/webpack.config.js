const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            path.resolve('src'),
            'node_modules',
        ],
        alias: {
            '@mui/material': '@mui/material',
        },
    },
    module: {
        rules: [
            { test: /\.css$/, use: 'css-loader' },
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ]
                    }
                }
            },
            {
                test: /\.[jt]sx?$/,
                exclude: /build/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.(jpe?g|png|gif)$/i,
                loader: 'file-loader',
                options: {
                    outputPath: 'assets/images',
                    name: '[name].[contenthash].js',
                },
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: [{ loader: '@svgr/webpack', options: { icon: true } }],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Market",
            template: './src/app/public/index.html',
            favicon: './src/app/public/favicon.ico'
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        historyApiFallback: true,
    },
    mode: 'development',
};