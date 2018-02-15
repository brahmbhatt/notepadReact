import React from 'react';
import './guide.css';
export default class Guide extends React.Component{
  render(){
    return (
      <div class="guide">
        <p class="guidePara"><strong>{this.props.value.title}</strong> <img class="noteImg"src="https://cdn2.iconfinder.com/data/icons/game-center-mixed-icons/512/note.png"/></p>
        
      </div>
    )
  }
}