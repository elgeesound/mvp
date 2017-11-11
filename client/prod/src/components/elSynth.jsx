import React from 'react';
import Tone from 'tone';
import axios from 'axios';
var $ = require('jQuery')

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
      recording: false,
      recCount: 0,
      currentRecord: [],
      lastIdx: 0,
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

  componentDidMount(){
    // make a get request to get the lastIdx;
  }

  componentDidUpdate() {
  }

  handleMouseKeyboardClick = (e) => {
    let hold = e.target.textContent;
    this.synth.triggerAttackRelease(e.target.textContent, '8n');
    if (this.state.recording) {
      this.setState({
        currentRecord: [...this.state.currentRecord, hold]
      });
      console.log(this.state.currentRecord);
    }
  };

  handleEffectsToggle = (e) => {
    /* REFACTOR LATER INEFFICIENT */
    let fx = Object.assign({}, this.state.fx);
    fx[e.target.textContent][0] = !this.state.fx[e.target.textContent][0];
    this.setState({fx});
    console.log(this.state.fx);
  };

  handleRecToggle = (e) => {
    let val = this.state.recCount;
    val++;
    this.setState({
      recording: !this.state.recording,
      recCount: val
    });

    if ( (val !== 0 && val % 2 === 0) && this.state.currentRecord[0] !== undefined ) {
      console.log('RECORDED');
      let data = {
        'idx': this.state.lastIdx++,
        'updated': Date.now(),
        'sequence': this.state.currentRecord
      }
      // REFACTOR TO AXIOS POST REQ
      axios.post('http://localhost:1128/seq', data).then((res) => {console.log('Succesful saved sequence')}).catch((err) => {console.log(err)});
      // axios({
      //   method: 'POST',
      //   url: 'http://127.0.0.1:3000/seq',
      //   data: data
      // }).then((res) => {
      //   console.log('successful post recorded');
      // }).catch((err) => {console.log(err)})
    }
  };

  render(){
    let keys = this.state.keys;
    let fx = Object.keys(this.state.fx);
    return (
      <container>
        <div className="keyboard">
          {keys.map(key => <button key={key.note} onClick={(e) => this.handleMouseKeyboardClick(e)}>{key.note}</button>)}
          <div className="effectsBar">
            {fx.map(effect => <button key={effect} style={{backgroundColor: this.state.fx[effect][0] ? 'green' : 'yellow'}} onClick={(e) => this.handleEffectsToggle(e)}>{effect}</button>)}
          </div>
          <button
            onClick={(e) => this.handleRecToggle(e)}
            style={{
              borderWidth: this.state.recording ? 10 : 1,
              borderColor:this.state.recording ? 'red' : 'black',
              alignItems:'center',
              justifyContent:'center',
              width:100,
              height:100,
              backgroundColor:'#fff',
              borderRadius:100,
            }}>REC</button>
        </div>
      </container>
      )
  }
}

export default Synth;