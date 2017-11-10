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