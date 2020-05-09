const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
    return {
        entry: './src/index.tsx',
        output: {
            filename: 'bundle.js',
            chunkFilename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            contentBase: './dist',
            port: 3000
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader'
                    ]
                }
            ]
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', 'scss']
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.relative(__dirname, './src/index.html')
            }),
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin()
        ]
    };
};
