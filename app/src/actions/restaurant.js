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
        dispatch(post(data, "LIKE"));
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
        dispatch(post(data, "DISLIKE"));
      });
  };
};

export const GetStatus = () => {
  const token = localStorage.getItem("token");
  return function (dispatch) {
    fetch("/restaurants/status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(post(data, "STATUS"));
      });
  };
};

const post = (data, type) => {
  return {
    type,
    payload: data,
  };
};
