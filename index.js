const Lindenmayer = require('./Lsystem');
const lindenmayer = new Lindenmayer();
const Melody = require('./Melody');
const melody = new Melody();

// Initializing a L-System that produces the Koch-curve
var lSystemLoops = 4; // how many l-system iterations to pre-compute
var thestring = 'F'; // "axiom" or start of the string
var therules = []; // array for rules
therules[0] = ['F', 'F+F-F-F+F']; // rules based on Koch Curve
var computedString; // variable to store the computed string

// Compute L-System
lindenmayer.compute(lSystemLoops,thestring,therules, function(thestring) {
  computedString = thestring;
  console.log(computedString);
  return computedString;
});

melody.create(computedString);
