import React from 'react';
import ReactDOM from 'react-dom';
import Synth from './elSynth.jsx';
import Test from './chat.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  record(seq) {
    $.ajax({
      type: 'POST',
      url: 'http://127.0.0.1:1128/seqs',
      data: seq,
      datatype: 'application/json',
      success: (res) => {
        console.log(`ajax recording: ${seq}`)
      }
    })
  }
  render(){
    return (
      <div>
        <Test />
        <Synth />
      </div>
      )
  }
}


export default App;