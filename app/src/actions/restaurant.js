export const Like = (id, data) => {
  const token = localStorage.getItem("token");
  return function (dispatch) {
    fetch("/restaurants/like", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, id, data }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(post(data));
      });
  };
};

export const Dislike = (id, data) => {
  const token = localStorage.getItem("token");
  return function (dispatch) {
    fetch("/restaurants/dislike", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, id, data }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(post(data));
      });
  };
};

const post = (data) => {
  return {
    type: "LIKE",
    payload: data,
  };
};
