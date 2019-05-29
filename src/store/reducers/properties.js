const INITIAL_STATE = {
  properties: [
    {
      id: Math.random(),
      text: 'Propertie',
    },
  ],
};

export default function Properties(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}
