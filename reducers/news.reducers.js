import {newsActions} from '../actions/news.actions';
import initNews from './initNews';

export default {
  newsState: (state = initNews.newsState, action) => {
    const {type, payload} = action;
    switch (type) {
      case newsActions.FETCH_NEWS:
        return {
          ...state,
          isLoading: true,
        };
      case newsActions.FETCH_NEWS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          news: payload.data,
        };
      case newsActions.FETCH_NEWS_ERROR:
        return {
          ...state,
          isLoading: false,
          errorMessage: payload,
        };

      default:
        return {...state};
    }
  },
};
