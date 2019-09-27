Based on the the Fractal-Music-Generator Musescore 2.0 plugin, an npm module to create monophonic melodies using L-Systems.

I created this as a compositional tool and the rule set can be changed to generate different melodies. The rule set I used is one that is usually used in visual art to generate Koch curves, rules : (F -> F+F-F-F+F).

The melody generator interprets each “F” as a note and each “+” or “-” as going up or down a pitch. I set my start note to “C4”, confined the melody to only move up and down the C pentatonic scale and created the score below using the Koch curve ruleset as seen above.  The rule set can be changed by changing 'therules' array.

## Install
```js
npm i l-system-melody
```

OR

```js
git clone https://github.com/ephemeralwaves/L-System-Music-Module.git

npm install
```

## Run

node index.js

This should output a midi file which can be played or examined in sheetmusic software like Musescore.

## Usage
```js
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

//Create Melody
melody.create(computedString);

```
## API

### new Lindenmayer()

Create a generator instance.

### .compute(numberOfIterations,thestring,theRules)

#### numberOfIterations

Number of times you want to iterate on the rule set

#### thestring

The starting string from which to iterate from

#### therules

The rule set, in example file the rule is set to F+F-F-F+F
