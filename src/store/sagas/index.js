import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import api from '~/services/api';
import * as PropertyActions from '~/store/actions/property';

function* getProperties(action) {
  try {
    const response = yield call(api.post, '/search', {
      maxLat: action.region.latitude + action.region.latitudeDelta / 2,
      minLat: action.region.latitude - action.region.latitudeDelta / 2,
      maxLng: action.region.longitude + action.region.longitudeDelta / 2,
      minLng: action.region.longitude - action.region.longitudeDelta / 2,
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

    yield put(PropertyActions.setProperties(response.data.adverts));
  } catch (error) {
    yield put(PropertyActions.setProperties([]));
  }
}

export default function* rootSaga() {
  // return yield all([takeLatest('SET_QUERY', login)]);
  return yield all([takeLatest('GET_PROPERTIES', getProperties)]);
}
