const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
    mode:"production",
    entry:[
      './src/Test.js'
    ],
    output: {
      path: path.resolve(__dirname + '/dist/'),
      filename: 'index.js',
      libraryTarget: 'commonjs2',
      globalObject: 'this'
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    target: 'node',
    externals: {
        react: 'react',
        reactDOM: 'react-dom'
    },
    resolve: {
        extensions: ["*",".js", ".jsx"]
    }
  };