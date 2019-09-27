
class Lindenmayer {

     interpret(s, therules) {
            var outputstring = ''; // start a blank output string

            // iterate through 'therules' looking for symbol matches:
            for (var i = 0; i < s.length; i++) {
                  var ismatch = 0; // by default, no match
                  for (var j = 0; j < therules.length; j++) {
                        if (s[i] == therules[j][0])  {
                        outputstring += therules[j][1]; // write substitution
                        ismatch = 1; // we have a match, so don't copy over symbol
                        break; // get out if the for() loop
                  }
            }
            // if nothing matches, just copy the symbol over.
            if (ismatch == 0) outputstring+= s[i];
            }
            return outputstring; // send out the modified string
    }

    compute(lSystemLoops,thestring,therules, callback){
        for (var i = 0; i < lSystemLoops; i++) {
              thestring = this.interpret(thestring, therules);
        }
        callback(thestring);
    }
}

module.exports = Lindenmayer;
