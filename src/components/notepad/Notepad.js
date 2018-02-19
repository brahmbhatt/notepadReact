import React from 'react';
import { connect } from 'react-redux';
import './notepad.css';
import Header from '../header/Header';
import NoteTitle from '../noteTitle/NoteTitle';
import Footer from '../footer/Footer';
import TitleArea from '../titleArea/TitleArea';
import Guide from '../guide/Guide';
import TextArea from '../textArea/TextArea';
import SaveNote from '../saveNote/SaveNote';
import SavedNotes from '../savedNotes/SavedNotes';
import saveNotes from '../../redux/actions/action';

class Notepad extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTitle: '',
      currentText: '',
      page: 0,
      index: 0,
      countRem: 10,
    };
  }
  onClickNote= (key) => {
    console.log('array:', this.props.notes);
    this.setState({
      currentTitle: this.props.notes[key].title,
      currentText: this.props.notes[key].text,
      index: key,
      page: 0,
    });
  }
  callback = () => {

  }
  handleOnSave = () => {
    // // Append into array //
    const obj = {
      index: this.state.index,
      currentTitle: this.state.currentTitle,
      currentText: this.state.currentText,
    };
    // const notes = this.state.notes.slice();
    // notes[this.state.index] = obj;
    console.log('my object:', obj);

    this.props.saveNote(obj);
    this.setState({
      currentTitle: '',
      currentText: '',
      page: 1,
    }, () => {
      this.setState({
        index: this.props.notes.length,
      });
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
    this.setState({ countRem: 10 });
  }
  render() {
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
        <SavedNotes onCreateNote={this.handleOnCreate} notesArray={this.props.notes} page={this.state.page} onClickNote={this.onClickNote} />
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  saveNote: (obj) => {
    console.log('oye obj:', obj);

    return dispatch(saveNotes(obj));
  },
});
const mapStateToProps = state => ({
  notes: state.saveNotes.notes,
});
export default connect(mapStateToProps, mapDispatchToProps)(Notepad);
