export const auth = () => {
  const token = localStorage.getItem("token");
  if (token) {
    return function (dispatch) {
      dispatch(auth(token, "verified"));
    };
  } else {
    dispatch(auth(null));
  }
};

export const getAuth = () => {
  return function (dispatch) {
    fetch("/")
      .then((res) => res.json())
      .then((data) => {
        dispatch(auth(data, "authenticated"));
      });
  };
};

const auth = (data, type) => {
  return {
    type,
    payload: data,
  };
};
