import React from 'react'
import { useSpring, animated } from 'react-spring';
import './App.css';
import Top from './components/Top/Top';
import Bottom from './components/Bottom/Bottom';

class App extends React.Component {
  state = {
    lightSwitchedOn: false,
  }

  flipSwitch = () => {
      this.setState((state) => ({
        lightSwitchedOn: !state.lightSwitchedOn
      }))   
}
     
  render(){
    return(
      <div className="App">
        <Top lightSwitchedOn={this.state.lightSwitchedOn} />
        <Bottom flipSwitch={this.flipSwitch} lightSwitchedOn={this.state.lightSwitchedOn} />      
      </div>
    )
}
  
}

export default App;
