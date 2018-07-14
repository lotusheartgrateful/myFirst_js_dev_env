import numeral from 'numeral';
import './index.css';

const courseValue = numeral(1000).format('$0,0.00');
//debugger; //-- to understand source maps - Reload the web page & see the debug is hit
console.log(`I would pay ${courseValue} for this awesome course!`); //-- Parse any variable placeholders with using back ticks (`) - ES6 feature
