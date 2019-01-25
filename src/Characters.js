import React from 'react';
export default class Characters extends React.Component{
  render(){return (
    <div>
    <h1> Characters List </h1>
    <h4>{this.props.question}</h4>
    </div>
  )
  }
}
