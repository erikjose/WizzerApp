export const getProperties = (region, filters) => ({
  type: 'GET_PROPERTIES',
  region,
  filters,
});

export const setProperties = property => ({
  type: 'SET_PROPERTIES',
  property: property.data.adverts,
});
