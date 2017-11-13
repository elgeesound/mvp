import React from 'react';
import Tone from 'tone';

class Transport extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
      label: 'START',
      activeSeq: props.currentRecord,
      activeDiv: props.currentDivision
    }
    this.handleTransportClick = this.handleTransportClick.bind(this);
    // this.handleTransportKeyPress = this.handleTransportKeyPress.bind(this);
    this.loop = new Tone.Pattern(function(time, note) {
      props.synth.triggerAttackRelease(note, props.currentDivision, time);

      // Tone.Draw.schedule(function() {
      //   $('#'+note).css("opacity", 1).animate({"opacity": 0}, 300)
      // }, time);
    }, this.state.activeSeq).start(0);

    this.loop.interval = props.currentDivision;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activeSeq: nextProps.currentRecord,
      activeDiv: nextProps.currentDivision
    });

    this.loop = new Tone.Pattern(function(time, note) {
      nextProps.synth.triggerAttackRelease(note, nextProps.currentDivision, time);

      // Tone.Draw.schedule(function() {
      //   $('#'+note).css("opacity", 1).animate({"opacity": 0}, 300)
      // }, time);
    }, this.state.activeSeq).start(0);

    console.log(this.loop);

  }

  handleTransportClick = (e) => {
    console.log('INSIDE THE LOOOOOP this is the active SEQ', this.state.activeSeq);
    let label;
    this.setState({
      isPlaying: !this.state.isPlaying
    });
    // this.state.isPlaying ? label = 'STOP' : label = 'START';
    if (this.state.isPlaying) {
      label = 'STOP';
      Tone.Transport.start("+0.1");
    } else {
      label = 'START'
      Tone.Transport.stop();
    }
    this.setState({label})
  };

  render(){
    return (
      <div>

        <button className="transport" onClick={(e) => {this.handleTransportClick(e)}}>{this.state.label}</button>
      </div>

      )
  }
}

export default Transport;