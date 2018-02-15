import React from 'react';
import Header from '../header/Header';
import Button from '../button/Button';
import Notes from '../notes/Notes';
import './savedNotes.css';

export default class SavedNotes extends React.Component {
myExample = () => {
  const arr = [];
  for (let i = 0; i < this.props.notesArray.length; i += 1) {
    console.log('inside loop');

    arr.push(<Notes index={i} notesArray={this.props.notesArray} />);
  }
  return arr;
}
render() {
  return (
    <div className="SavedNotes-note">
      <Header value={{ title: 'Saved Notes' }} />
      {this.myExample()}
      <Button value={{ title: 'Create new Note' }} onClick={this.props.onCreateNote} />
    </div>
  );
}
}
