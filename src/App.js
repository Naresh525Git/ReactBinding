import React, { Component } from 'react';


class App extends Component {
  constructor()
  {
    super();
    this.superBoss= "naresh"

  }
  getMyname(){
    return "naresh"
  }
  render() {
      var name = "naresh";
    return (
      <div className="App">
      <h1> Hi {name}</h1>
      <h2> Hello {this.getMyname()}</h2>
      <h3>Welcome to Hyderabad {this.superBoss}</h3>
      <h4> {10+2-3}</h4>
      </div>
    );
  }
}

export default App;
