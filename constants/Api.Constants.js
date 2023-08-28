const urls = {
  // authentication
  LOGIN: 'api/login',
  REGISTER: 'api/register',
  FETCH_USER_DETAILS: 'api/user/details',
  UPDATE_USER_DETAILS: 'api/user/profile',

  // public
  FETCH_NEWS: 'api/news',
};

export const axiosOptions = {
  withCredentials: true,
  crossdomain: true,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const getURL = (type, ...params) => {
  let url = urls[type];
  for (let i = 0; i < params.length; i += 1) {
    url = url.replace(`{${i}}`, params[i]);
  }
  return url;
};

export const addParamsToUrl = payload => {
  let str = '?';
  const arr = Object.keys(payload);
  arr.map((key, i) => {
    if (payload[key]) {
      str += `${key}=${payload[key]}`;
      if (i !== arr.length - 1) {
        str += '&';
      }
    }
    return null;
  });

  // removing the last & in case of optional parameters
  if (str[str.length - 1] === '&') {
    str = str.substr(0, str.length - 1);
  }
  return str;
};
