const initialState = {
  count: 0,
};

export default function incrementBellState(state = initialState, action) {
  switch (action.type) {
    case PLUS_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return state;
  }
}
