import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port     = 3001;
const app      = express();
const compiler = webpack(config); //-- reference to webpack compiler

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
})
); //-- Tell express to use webpack-dev-middleware & not to display any special info & configure our public path

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err) // eslint-disable-line no-console
  }
  else {
    open('http://localhost:' + port);
  }
})
