import React from 'react';
import Tone from 'tone';

class Transport extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      isPlaying: false,
      label: 'START'
    }
    this.handleTransportClick = this.handleTransportClick.bind(this);
    // this.handleTransportKeyPress = this.handleTransportKeyPress.bind(this);
    this.loop = new Tone.Pattern(function(time, note) {
      props.synth.triggerAttackRelease(note, "16n", time);

      // Tone.Draw.schedule(function() {
      //   $('#'+note).css("opacity", 1).animate({"opacity": 0}, 300)
      // }, time);
    }, props.currentRecord).start(0);

    this.loop.interval = "16n";
  }

  handleTransportClick = (e) => {
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