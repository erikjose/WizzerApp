import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import api from '~/services/api';

export default function* rootSaga() {
  // return yield all([takeLatest('SET_QUERY', login)]);
  return yield all([ () => {} ]);
}
