var MidiWriter = require('midi-writer-js');
//Notes and Pitch
var notes = ['C1','D1','E1','G1','A1','C1','D2','E2','G2','A2','C3','D3','E3','G3','A3','C4','D4','E4','G4','A4','C5','D5','E5','G5','A5','C6','D6','E6','G6','A6','C7','D7','E7','G7','A7']//pentatonic C scale
var currentPitch = 20;//setting where to start in note array
var whereinstring = 0; // where in the L-system are we?

class Melody {


   setCurrentPitch(currentPitch) {
         var newPitch = currentPitch;
         this.getCurrentPitch(newPitch);
  }
   getCurrentPitch(currentPitch) {
        if (currentPitch == null){ // add note
              currentPitch = 'C5';
              return currentPitch;
        } else {
         return currentPitch;
        }
  }

  create(thestring) {
    var track = new MidiWriter.Track();
    track.setTimeSignature(3,4);

      for(var n=0; n < 302; n++) {
            var k = thestring[whereinstring];

            if (k=='F') { // add note
              track.addEvent([
                  new MidiWriter.NoteEvent({pitch: [notes[currentPitch]], duration: '4'}),
                ], function(event, index) {
                return {sequential:true};
              }
            );
                  //console.log("F: " + currentPitch);
            } else if (k == '+') {
                  currentPitch++; // up a note
                  console.log("F+1: " + currentPitch);
            } else if (k == '-') {
                  currentPitch--; // down a note
                  console.log("F-1: " + currentPitch);
            }

            //cursor.next(); // goes to next measure
            this.setCurrentPitch(currentPitch);

            // increment the point for where we're reading the string.
            // wrap around at the end.
            whereinstring++;

            if (whereinstring > thestring.length-1){
                  whereinstring = 0;
            }
      }
      // write out track and export midi
      var write = new MidiWriter.Writer(track);
      write.saveMIDI('fractalmelody');

    }
}

module.exports = Melody;
