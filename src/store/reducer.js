const initialState = {
  data: '',
};

function reducer(state, action) {
  switch (action.type) {
    case "SAVE_DEPOSITE":
      return {
        ...state,
        data: action.payload,
      };
  }
}
export { initialState };
export default reducer;
