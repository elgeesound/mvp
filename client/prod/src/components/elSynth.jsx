import React from 'react';
import Tone from 'tone';

class Synth extends React.Component {
  constructor(props) {
    super(props);

    this.waves = ['sine', 'triangle', 'pulse', 'saw'];

    this.state = {
      keys: [{note: 'C4'}, {note: 'D4'}, {note: 'E4'}, {note: 'F4'}],
      toggleOn: false,
      currentWave: null
      FX: {
        'BitCrusher': false,
        'Chorus': false,
        'Distortion': false,
        'JCReverb': false,
        'Phaser': false,
        'PingPongDelay': false,
        'StereoWidener': false
      }
    }
  }

  handleMouseClick = (e) => {
    this.synth.triggerAttackRelease(e.target.textContent, '1n');
  }


  render(){

  }
}

export default Synth;