const INITIAL_STATE = {
  query: null,
  geocode: null,
};

export default function Query(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,
        query: action.uri,
      };
    default:
      return state;
  }
}
