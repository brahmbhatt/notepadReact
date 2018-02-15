import React from 'react';
import './notes.css';


export default class Notes extends React.Component {
  render() {
    console.log(`length${this.props.notesArray.length}`);
    return (
      <div className="Notes-div">
        <p className="Notes-title"><strong>{this.props.notesArray[this.props.index].title}</strong></p>
        <div className="Notes-text">{this.props.notesArray[this.props.index].text}</div>
      </div>
    );
  }
}

// const myExample = () => {
//   let myArray = []
//   for(let i = 0; i<5;i++) {
//       myArray.push(<MyComponent/>)
//   }
//   return myArray
// }

// //... in JSX

// <tbody>
//   {myExample()}
// </tbody>
