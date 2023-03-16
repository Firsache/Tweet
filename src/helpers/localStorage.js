export const saveToLS = (key, value) => {
  if (key && value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// export const loadFromLS = key => {
//   try {
//     return JSON.parse(localStorage.getItem(key)) || {};
//   } catch (e) {
//     return localStorage.getItem(key);
//   }
// };

export const parseDataFromLS = (key, initialValue = []) => {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? initialValue;
  } catch (e) {
    return initialValue;
  }
};
