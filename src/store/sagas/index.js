import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import api from '~/services/api';

function* getProperties(action) {
  try {
    const response = yield call(api.post, '/search', {
      maxLat: 90,
      minLat: -90,
      maxLng: 180,
      minLng: -180,
      filters: {
        transaction: action.filters.transaction,
        propertyType: action.filters.propertyType,
        price: {
          min: action.filters.price.min,
          max: action.filters.price.max,
        },
        area: {
          min: action.filters.area.min,
          max: action.filters.area.max,
        },
        condo: {
          min: action.filters.condo.min,
          max: action.filters.condo.max,
        },
        rooms: action.filters.bedroom,
        bathrooms: action.filters.bathroom,
        parkingSpaces: action.filters.parkingSpace,
        daysOnWizzer: action.filters.daysOnWizzer,
      },
    });

    console.log(response.data.adverts);
    yield put({
      type: 'SET_PROPERTIES',
      property: response.data.adverts,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: 'SET_PROPERTIES',
      property: [],
    });
  }
}

export default function* rootSaga() {
  // return yield all([takeLatest('SET_QUERY', login)]);
  return yield all([takeLatest('GET_PROPERTIES', getProperties)]);
}
