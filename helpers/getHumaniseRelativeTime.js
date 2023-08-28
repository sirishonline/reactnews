export default date => {
  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;
  const longyear = year * 37;

  const suffix = " ago";

  const elapsed = Math.floor((Date.now() - date) / 1000);

  if (elapsed < minute) {
    return "just now";
  }

  if (elapsed > longyear) {
    return "a long while";
  }

  // get an array in the form of [number, string]
  const a = (elapsed < hour && [Math.floor(elapsed / minute), "minute"]) ||
    (elapsed < day && [Math.floor(elapsed / hour), "hour"]) ||
    (elapsed < week && [Math.floor(elapsed / day), "day"]) ||
    (elapsed < month && [Math.floor(elapsed / week), "week"]) ||
    (elapsed < year && [Math.floor(elapsed / month), "month"]) || [
      Math.floor(elapsed / year),
      "year"
    ];

  // pluralise and append suffix
  return `${a[0]} ${a[1]}${a[0] === 1 ? "" : "s"}${suffix}`;
};
