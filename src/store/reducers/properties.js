const INITIAL_STATE = {
  property: [],
};

export default function Properties(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_PROPERTIES':
      return { property: action.property };
    case 'GET_PROPERTIES':
      return state;
    default:
      return state;
  }
}
