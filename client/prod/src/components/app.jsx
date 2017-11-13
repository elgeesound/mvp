import React from 'react';
import ReactDOM from 'react-dom';
import Synth from './elSynth.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  record(seq) {
  }
  render(){
    return (
      <div>
        <Synth />
      </div>
      )
  }
}


export default App;