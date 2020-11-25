import React from 'react';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log("App class constructor");
  }
  state = {
    count : 0
  }
  add = () =>{
    this.setState(current => ({count : current.count + 1}));   // setState는 object, setState는 새로운 state를 받아야함.
  };
  minus = () => {
    this.setState(current => ({count : current.count - 1})); // react는 setState가 호출되면 state를 refresh하고 render function을 호출함
  };
  componentDidMount(){
    console.log("component rendered");
  }
  componentDidUpdate(){
    console.log("component just updated");
  }
  componentWillUnmount(){
    console.log("Good bye");
  }
  render(){
    console.log("I'm rendering");
    return (
      <div>
          <h1>The number is {this.state.count}</h1>
          <button onClick={this.add}>Add</button>
          <button onClick={this.minus}>Minus</button>
      </div>
      );
    }
}

export default App;


