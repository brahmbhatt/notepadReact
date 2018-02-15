import React from 'react';
import './notepad.css';
import Header from '../header/Header';
import NoteTitle from '../noteTitle/NoteTitle';
import Footer from '../footer/Footer';
import TitleArea from '../titleArea/TitleArea';
import Guide from '../guide/Guide';
import TextArea from '../textArea/TextArea';
import SaveNote from '../saveNote/SaveNote';
import SavedNotes from '../savedNotes/SavedNotes';

export default class Notepad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitle: '',
      currentText: '',
      index: 0,
      notes: [],
      page: 0,
      countRem: 10,
    };
  }
  callback = () => {

  }
  handleOnSave = () => {
    // Append into array //
    const obj = {
      title: this.state.currentTitle,
      text: this.state.currentText,
    };
    const notes = this.state.notes.slice();
    notes[this.state.index] = obj;
    const index = this.state.index + 1;
    console.log(`obj${obj}`);
    this.setState({
      notes,
      index,
      currentTitle: '',
      currentText: '',
      page: 1,
    }, () => {
      // this.props.getNotes(this.state.index);
    });
  }

  handleTitleChange = (title) => {
    this.setState({ currentTitle: title });
  }

  handleTextChange = (text) => {
    const limit = this.state.countRem - 1;
    this.setState({ countRem: limit });
    this.setState({ currentText: text });
  }

  // handleOnSavee = () => {
  //   this.setState({ page: 1 });
  // }
  handleOnCreate= () => {
    this.setState({ page: 0 });
  }
  render() {
    console.log(this.state.notes);
    if (this.state.page === 0) {
      return (
        <div className="form">
          <Header value={{ title: 'Start Taking Notes' }} />
          <NoteTitle value={{ noteTitle: 'Note Title', buttonTitle: 'en' }} />
          <TitleArea value={{ title: this.state.currentTitle }} onChange={this.handleTitleChange} />
          <Guide value={{ title: 'Please type your note below' }} />
          <TextArea value={{ length: '9', title: this.state.currentText, maxChar: '10' }} onChange={this.handleTextChange} />
          <SaveNote
            value={{ save: 'Save', char: '120 chacters' }}
            onClick={this.handleOnSave}
            countRem={this.state.countRem}
          />
          <Footer value={{ title: 'About Us' }} />
        </div>
      );
    }
    return (
      <div>
        <SavedNotes onCreateNote={this.handleOnCreate} notesArray={this.state.notes} />
      </div>
    );
  }
}
