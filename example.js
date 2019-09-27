const Lindenmayer = require('./Lsystem');
const lindenmayer = new Lindenmayer();
const Melody = require('./Melody');
const melody = new Melody();

// Initializing a L-System that produces the Koch-curve
var numberOfIterations = 4; // how many l-system iterations to pre-compute
var theString = 'F'; // "axiom" or start of the string
var theRules = []; // array for rules
theRules[0] = ['F', 'F+F-F-F+F']; // rules based on Koch Curve
var computedString; // variable to store the computed string

// Compute L-System
lindenmayer.compute(numberOfIterations,theString,theRules, function(theString) {
  computedString = theString;
  return computedString;
});


melody.create(computedString);
