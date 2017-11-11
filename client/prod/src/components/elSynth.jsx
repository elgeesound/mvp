import React from 'react';
import Tone from 'tone';

class Synth extends React.Component {
  constructor(props) {
    super(props);

    this.verb = new Tone.JCReverb(0.9).toMaster();
    this.crusher = new Tone.BitCrusher(4).connect(this.verb);
    this.synth = new Tone.AMSynth().connect(this.crusher);
    this.waves = ['sine', 'triangle', 'pulse', 'saw'];

    this.state = {
      scale: ['major', 'minor'],
      keys: [{note: 'C4'}, {note: 'D4'}, {note: 'E4'}, {note: 'F4'}],
      toggleOn: false,
      currentWave: null,
      fx: {
          'BitCrusher': [false, 0],
          'Chorus': [false, 0],
          'Distortion': [false, 0],
          'JCReverb': [false, 0],
          'Phaser': [false, 0],
          'PingPongDelay': [false, 0],
          'StereoWidener': [false, 0]
        }
    }
  }

  handleMouseKeyboardClick = (e) => {
    this.synth.triggerAttackRelease(e.target.textContent, '1n');
  };

  handleEffectsToggle = (e) => {
    /* REFACTOR LATER INEFFICIENT */
    let fx = Object.assign({}, this.state.fx);
    fx[e.target.textContent][0] = !this.state.fx[e.target.textContent][0];
    this.setState({fx});
    console.log(this.state.fx);
  };


  render(){
    let keys = this.state.keys;
    let fx = Object.keys(this.state.fx);
    return (
      <div className="keyboard">
        {keys.map(key => <button key={key.note} onClick={(e) => this.handleMouseKeyboardClick(e)}>{key.note}</button>)}
        <div className="effectsBar">
          {fx.map(effect => <button key={effect} onClick={(e) => this.handleEffectsToggle(e)}>{effect}</button>)}
        </div>
      </div>
      )
  }
}

export default Synth;