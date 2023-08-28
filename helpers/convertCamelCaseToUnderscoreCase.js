export default string => {
  if (string) {
    return string
      .split(/(?=[A-Z])/)
      .join("_")
      .toLowerCase();
  }
  return string;
};
