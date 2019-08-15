export const plural = num => {
  return (num + "").length === 1 ? `0${num}` : `${num}`;
};

export const getDateArray = (start, end) => {
  const arr = [];
  const dt = new Date(start);
  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
};