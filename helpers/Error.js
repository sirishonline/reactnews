import AppConstants from "../constants/App.Constants";

export const getErrorDescription = err => {
  const errObj = {};
  // if (err.response.status === ErrorConstants.UNPROCESSABLE_ENTITY) {
  //   errObj["description"] = AppConstants.CUSTOM_ERROR_MESSAGE;
  // } else
  if (err.response?.data?.error?.length > 0) {
    errObj.description = err.response.data.error;
  } else if (err.response?.data?.errors?.[0]) {
    errObj.description = err.response.data.errors[0].message;
  } else {
    errObj.description = AppConstants.CUSTOM_ERROR_MESSAGE;
  }
  return { ...err, ...errObj };
};

export const getRedirectErrorObject = () => ({
  description: "Redirecting to Login...."
});
