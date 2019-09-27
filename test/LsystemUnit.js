const Lindenmayer = require('../Lsystem.js');
const expect = require('chai').expect;
var should = require('chai').should();
const lindenmayer = new Lindenmayer();
var thestring = 'F'; // "axiom" or start of the string
var therules = []; // array for rules
therules[0] = ['F', 'F+F-F'];

describe( 'Lindenmayer module', () => {
  
  describe('"Lindenmayer"', () => {
    it('should export a function', () => {
      expect(Lindenmayer).to.be.a('function');
    })

    it('should interpret a ruleset', () => {

      lsystemInterpret = lindenmayer.interpret(thestring, therules);
      lsystemInterpret.should.equal('F+F-F')
      expect(Lindenmayer).to.have.lengthOf(0);
    })

    it('should iterate through a ruleset', () => {

      lsystemInterpret = lindenmayer.compute(2,thestring, therules, function(thestring) {
        computedString = thestring;
        return computedString;
      });
      computedString.should.equal('F+F-F+F+F-F-F+F-F')
    })

  })
})
