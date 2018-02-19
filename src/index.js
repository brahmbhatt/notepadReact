import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import './index.css';
import Notepad from './components/notepad/Notepad';

ReactDOM.render(<Provider store={store()}><Notepad /></Provider>, document.getElementById('root'));
