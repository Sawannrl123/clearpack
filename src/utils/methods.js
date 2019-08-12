export const plural = num => {
  return (num + "").length === 1 ? `0${num}` : `${num}`;
};
