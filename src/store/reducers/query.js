const INITIAL_STATE = {
  query: null,
  geocode: null,
  region: {
    latitude: -14.902322,
    longitude: -54.18457,
    latitudeDelta: 41.348938,
    longitudeDelta: 41.132812,
  },
  user: {
    latitude: null,
    longitude: null,
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
    case 'SET_USER_LOCATION':
      return {
        ...state,
        user: {
          latitude: action.location.latitude,
          longitude: action.location.longitude,
        },
      };
    default:
      return state;
  }
}
