const INITIAL_STATE = {
  filters: {
    transaction: ['vender', 'alugar'],
    propertyType: [],
    price: { min: 0, max: 0 },
    condo: { min: 0, max: 0 },
    area: { min: 0, max: 0 },
    bedroom: [],
    bathroom: [],
    parkingSpace: [],
    daysOnWizzer: 0,
  },
};

export default function Filters(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_FILTERS':
      return { filters: action.filters };

    default:
      return state;
  }
}
