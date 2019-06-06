const INITIAL_STATE = {
  query: null,
  geocode: null,
  region: {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  },
};

export default function Query(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_QUERY':
      return {
        ...state,
        query: action.query,
      };
    case 'SET_GEOCODE':
      const { geometry } = action.geocode.results[0];

      const region = {
        latitude: geometry.location.lat,
        longitude: geometry.location.lng,
        latitudeDelta: Math.abs(geometry.viewport.northeast.lat - geometry.viewport.southwest.lat),
        longitudeDelta: Math.abs(geometry.viewport.northeast.lng - geometry.viewport.southwest.lng),
      };

      return {
        ...state,
        geocode: action.geocode,
        region,
      };
    case 'SET_BOUNDS':
      return {
        ...state,
        region: action.bounds,
      };
    default:
      return state;
  }
}
