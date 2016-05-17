var path = require('path');

module.exports = {
  context:path.join(__dirname,'app'),
  entry: './js/index.js',
  output: {
    path:path.join(__dirname,'app'),
    filename:'index.min.js'
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        exclude:  /node_modules/,
        loader: 'babel-loader',
        query:{
          presets: ['es2015'],
          }
      }
    ]
  }
};