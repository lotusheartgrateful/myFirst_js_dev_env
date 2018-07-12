import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

//-- second test that uses jsdom
describe('index.html', () => {
  //-- when we call jsdom, an asynchronous call is being made. We need to setup our test to be asynchronous
  //-- we need to have an argument "done"
  it('should say hello', (done)=> {
    //-- set index const variable to the context of the index.html file
    const index = fs.readFileSync('./src/index.html', 'utf-8'); //-- here we have reference to the index.html & specify it is in utf-8
    jsdom.env(index, function(err, window) { //-- here we have a virtual DOM in memory
      const h1 = window.document.getElementsByTagName('h1')[0]; //-- reference to the first h1 element on the page
      expect(h1.innerHTML).to.equal("Hello World!?");
      done(); //-- tells mocha that are test is done & report results after test is done. Safe to evaluate expect whether it is true or false
      window.close();
    });
  });
});
