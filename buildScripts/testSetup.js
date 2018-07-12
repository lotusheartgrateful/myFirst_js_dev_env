//-- This file is'nt transpiled, so you must use CommanJS and ES5

//-- Register babel to transpile before our tests run
require('babel-register')();

//-- Disable webpack features that Mocha does not understand, in this case: the css extensions, as in index.js we require index.css
require.extensions['.css'] = function() {};
