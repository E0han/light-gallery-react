
// const nodeExternals = require('webpack-node-externals');
// const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    mode:"production",
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: "index.bundle.js",
        library:"LightGallery",
        libraryTarget: "umd",
        libraryExport:"default",
        globalObject: 'this'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    externals: {
        react: {
            commonjs: 'react', // CommonJS 模块
            commonjs2: 'react', // CommonJS 模块
            amd: 'react',       // AMD 模块
            root: 'React',     // 全局变量访问
          },
        'react-dom': {
            commonjs: 'react-dom',
            commonjs2: 'react-dom',
            amd: 'react-dom',
            root: 'ReactDOM',
          }
    },
    resolve: {
        extensions: ['.js'],
    }
  };