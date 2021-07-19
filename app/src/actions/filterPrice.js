export const filterPrice = (filter) => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/posts");
    dispatch(filtered(filter));
  };
};

const filtered = (filterList) => {
  return {
    type: "FILTER",
    payload: filterList,
  };
};
