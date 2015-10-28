var path = require('path');
var webpack = require('webpack');
var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');


module.exports = {
    entry:  {
      mainApp: './app/main',
      anotherApp: './app/another',
      libs: ['angular']
    }, 
    output: {
        path: path.resolve(__dirname + '/build'),
        filename: "[name].bundle.js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('libs', 'common.js'),
        new ngAnnotatePlugin({
            add: true
        })
    ]
};