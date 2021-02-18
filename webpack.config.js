const path = require('path');

module.exports = (env) => {
    const isDevelopment = env.development;

    return {
        entry: path.resolve(__dirname, 'frontend/src/index.js'),
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.scss$/,
                    exclude: /\.global\.scss$/,
                    use: [
                        'style-loader',
                        {
                            loader: 'css-loader',
                            options: {
                                modules: {
                                    localIdentName: '[name]_[local]_[hash:base64:5]'
                                },
                                sourceMap: isDevelopment,
                            },
                        },
                        'postcss-loader',
                        {
                            loader:'sass-loader',
                            options: {
                                sourceMap: isDevelopment,
                            },
                        }
                    ],
                },
                {
                    test: /\.global\.scss$/,
                    exclude: /^\.scss$/,
                    use: [
                        'style-loader',
                        'css-loader',
                        'postcss-loader',
                        {
                            loader:'sass-loader',
                            options: {
                                sourceMap: isDevelopment,
                            },
                        }
                    ]
                }
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },
        output: {
            path: path.resolve(__dirname, './frontend/dist'),
            filename: 'bundle.js',
        },
        devServer: {
            contentBase: path.resolve(__dirname, './frontend/dist'),
        },
    }
};
