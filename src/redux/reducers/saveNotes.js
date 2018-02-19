const defaultNote = {
  notes: [],
};
const counter = (state = defaultNote, action) => {
  console.log('my payload:', action.payload);

  switch (action.type) {
    case 'SAVENOTES':
    {
      const obj = {
        title: action.payload.currentTitle,
        text: action.payload.currentText,
      };
      const notes = state.notes.slice();
      notes[action.payload.index] = obj;
      return ({
        ...state,
        notes,
      });
    }
    default:
    {
      return state;
    }
  }
};

export default counter;

