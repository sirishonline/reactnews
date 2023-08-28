export const newsActions = {
  FETCH_NEWS: 'FETCH_NEWS',
  FETCH_NEWS_SUCCESS: 'FETCH_NEWS_SUCCESS',
  FETCH_NEWS_ERROR: 'FETCH_NEWS_ERROR',
};

export const newsActionCreators = {
  fetchNews: payload => ({
    type: newsActions.FETCH_NEWS,
    payload,
  }),
};
