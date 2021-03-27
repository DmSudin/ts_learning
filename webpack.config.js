const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { transpileModule } = require('typescript');
module.exports = (env) => {
    const devMode = !env.production;
    // const devMode = true;

    return {
        mode: devMode? 'development' : 'production',
        entry: './src/app/index.ts',
        output: {
            path: path.resolve(__dirname,'dist'),
            filename: 'app.bundle.js',
            clean: true,
        },
        devtool: devMode? 'source-map' : false,
        resolve: {
            extensions: ['.ts', '.tsx', '.js', ],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: devMode,
                            },
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                implementation: require('sass'),
                                sourceMap: devMode,
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin(),
        ],
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: true,
            port: 7777,
        },
    }
}