const HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * @return {import('webpack').Configuration}
 */
module.exports = function (env, argv) {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.tsx',
        devtool: 'source-map',
        output: {
            clean: true,
            filename: '[contenthash:8].bundle.js',
            path: `${__dirname}/dist`,
            publicPath: '/',
        },
        mode: isProduction ? 'production' : 'development',
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.json'],
            modules: ['node_modules', `${__dirname}/src`],
        },
        module: {
            rules: [
                {
                    test: /\.tsx? $/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './src/index.html',
            }),
        ],
    };
};
