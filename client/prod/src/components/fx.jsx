import React from 'react';
import Tone from 'tone';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';
import RaisedButton from 'material-ui/RaisedButton';
// import Interface from '../../../../lib/Interface.js';
// import draggabilly from 'draggabilly';
var $ = require('jQuery');

class FX extends React.Component {
  constructor(props) {
    super(props);

    this.chorusSend = props.synth.send("chorus", -Infinity);
    this.chebySend = props.synth.send("cheby", -Infinity);
    this.distortSend = props.synth.send("distort", -Infinity);
    this.reverbSend = props.synth.send("reverb", -Infinity);

    this.chorus = new Tone.Chorus().receive("chorus").toMaster();
    this.cheby = new Tone.Chebyshev(50).receive("cheby").toMaster();
    this.distort = new Tone.Distortion().receive("distort").toMaster();
    this.reverb = new Tone.Freeverb(0.8, 4000).receive("reverb").toMaster();
  }


  handleChorusSend = (e, newVal) => {
    this.chorusSend.gain.value = newVal;
  };

  handleChebySend = (e, newVal) => {
    this.chebySend.gain.value = newVal;
  };

  handleDistortSend = (e, newVal) => {
    this.distortSend.gain.value = newVal;
  };

  handleVerbSend = (e, newVal) => {
    this.reverbSend.gain.value = newVal;
  };

  render(){
    return (
      <MuiThemeProvider>
        <div>
          <span>Chorus</span>
          <Slider min={0.0} max={1.0} step={0.1} className="chorusSlider" style={{height: 150}} axis="x" onChange={(e, newVal) => this.handleChorusSend(e, newVal)}></Slider>
          <span>WaveShaper **** CAREFUL use 25% or less</span>
          <Slider min={0} max={100} step={1} className="chebySlider" style={{height: 150}} axis="x" onChange={(e, newVal) => this.handleChebySend(e, newVal)}></Slider>
          <span>Distortion</span>
          <Slider min={0.0} max={1.0} step={0.1} className="distortSlider" style={{height: 150}} axis="x" onChange={(e, newVal) => this.handleDistortSend(e, newVal)}></Slider>
          <span>Reverb</span>
          <Slider min={0.0} max={1.0} step={0.1} className="verbSlider" style={{height: 150}} axis="x" onChange={(e, newVal) => this.handleVerbSend(e, newVal)}></Slider>
        </div>
      </MuiThemeProvider>

      )
  }
}


export default FX;