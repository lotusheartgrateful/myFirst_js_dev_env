import path from 'path';
//import HtmlWebpackPlugin from 'html-webpack-plugin';

export default { //-- configured by exporting an object
  debug: true,
  devtool: 'inline-source-map', //-- Sourcemap configuration
  noInfo: false, //-- means webpack will display a list of files that it is bundling
  entry: [ //-- entry point of the application :: __dirname - from Node
    path.resolve(__dirname, 'src/index') //-- entry point Javascript is index.js
  ],
  target: 'web', //-- targetting the web for this demo. We can also target it to Node.
  output: { //-- Where it should create the dev bundle. Webpack creates a bundle in memory.
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [ //-- to enhance web pack power like linting, hot reloading etc.
    // Create HTML file that includes reference to bundled JS.
    /*new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })*/
  ],
  module: {
    loaders: [ //-- file types that webpack needs to handle. Here, we configure it to handle JavaScript, CSS.
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
