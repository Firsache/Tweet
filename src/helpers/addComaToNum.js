export const addComa = str => {
  const num = +str;
  const numFor = Intl.NumberFormat('en-US');
  return numFor.format(num);
};
