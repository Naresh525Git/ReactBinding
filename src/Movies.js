import React from 'react';
class Movies extends React.Component{
  render(){
    return (<div><h1>Movies List </h1>
      <h4>{this.props.question}</h4>
      </div>);
  }
}
export default Movies;
