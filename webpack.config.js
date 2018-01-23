const path = require('path');

module.exports = {
    entry: './src/js/site.js',
    output: {
        path: path.resolve(__dirname,'./dist/js/'),
        filename: 'site.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /libs/,
                loaders: []
            }
        ],
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
