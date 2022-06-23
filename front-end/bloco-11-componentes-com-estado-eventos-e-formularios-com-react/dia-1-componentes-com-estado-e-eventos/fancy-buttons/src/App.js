import React from 'react';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      clickCounter: 0,
    }
  }

  handleClick() {
    this.setState((currState, _props) => (
        {clickCounter: currState.clickCounter + 1}
      ), () => console.log(this.handleBtnColor())
    );
  }

  handleBtnColor() {
    if (this.state.clickCounter % 2 === 0) return 'green'
    return 'blue'
  }

  render() {
    return (
      <>
        <button onClick={this.handleClick} style={{backgroundColor: this.handleBtnColor()}}>
          {this.state.clickCounter}
        </button>
      </>
    )
  }
}

export default App;
