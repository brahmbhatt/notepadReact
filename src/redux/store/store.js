import { createStore } from 'redux';
import saveNotes from '../reducers';

const store = () => createStore(saveNotes, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
