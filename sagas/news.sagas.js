import {call, put, takeLatest} from 'redux-saga/effects';

import {newsActions} from '../actions/news.actions';
import API from '../services/Api';
import {getURL} from '../constants/Api.Constants';

function* fetchNews() {
  try {
    const response = yield call(API.get, getURL('FETCH_NEWS'));
    yield put({
      type: newsActions.FETCH_NEWS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put({
      type: newsActions.FETCH_NEWS_ERROR,
      payload: error.description,
    });
  }
}

function* watchFetchNews() {
  yield takeLatest(newsActions.FETCH_NEWS, fetchNews);
}

export default [watchFetchNews()];
