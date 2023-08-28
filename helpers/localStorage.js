export const getStorage = () => JSON.parse(localStorage.getItem("user"));

export const saveStorage = data => {
  localStorage.setItem("user", JSON.stringify(data));
};

export const removeStorage = () => {
  localStorage.removeItem("user");
};
