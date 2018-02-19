const SAVENOTES = 'SAVENOTES';
const saveNotes = dataObj => ({
  type: SAVENOTES,
  payload: {
    index: dataObj.index,
    currentTitle: dataObj.currentTitle,
    currentText: dataObj.currentText,
  },
});
export default saveNotes;
