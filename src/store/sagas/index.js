import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import api from '~/services/api';

function* login() {
  try {
    const res = yield call(api.get, '/users/erikjose');

    console.tron.log(res.data);
  } catch (err) {
    console.tron.log('Error', err);
  }
}

export default function* rootSaga() {
  return yield all([takeLatest('SET_QUERY', login)]);
}
