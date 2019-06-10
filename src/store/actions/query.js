export const setQuery = value => ({
  type: 'SET_QUERY',
  query: value,
});

export const setGeocode = value => ({
  type: 'SET_GEOCODE',
  geocode: value,
});

export const setBounds = value => ({
  type: 'SET_BOUNDS',
  bounds: value,
});

export const setUserLocation = (latitude, longitude) => ({
  type: 'SET_USER_LOCATION',
  location: { latitude, longitude },
});
