const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 模式
    mode: 'development',
    // mode: 'production',
    // 入口
    entry: './src/main.js',
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'altoria_utils.js',
        // filename: 'altoria_utils_min.js',
        library: 'aUtils',  // 向外暴露对象的名称
        libraryTarget: 'umd',  // 针对 esm/commonjs/amd
        environment: {
            arrowFunction: false,
            const: false
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        'targets': {
                                            'chrome': '30',
                                            'ie': '8'
                                        },
                                        'corejs': 3,
                                        'useBuiltIns': 'usage'
                                    }
                                ]
                            ]
                        }
                    }
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin()
    ]
}