const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: './src/app.tsx',
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|jpeg)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/img/[name].[ext]',
                },
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: "css/[contenthash].css",
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: "./src/assets",
                    to: "./assets"
                },
            ],
            options: {
              concurrency: 100,
            },
        }),
    ],
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css', 'scss', '.jpg'],
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    output: {
        publicPath: '/',
        filename: "js/[id].[fullhash].js",
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    }
}