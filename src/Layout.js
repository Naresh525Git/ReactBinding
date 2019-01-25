import React from 'react';
import Movies from './Movies';
import Characters from './Characters';
class Layout extends React.Component{
  constructor(){
    super();
    this.state = {Welcome : "Welcome to react"}
  }
  render(){
    const movieQuestion = "Have you seen all of these movies?";
    const characterQuestion = "What are all characters in Movie?"
    return (
      <div>{this.state.Welcome}
      <Movies question={movieQuestion}/>
      <Characters question={characterQuestion}/>
      </div>
    )
  }
}
export default Layout;
