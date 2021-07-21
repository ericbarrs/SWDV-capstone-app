export const GetFavs = () => {
  const token = localStorage.getItem("token");
  return function (dispatch) {
    fetch("https://mylocalfood-server.herokuapp.com/favs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(post(data));
      });
  };
};

const post = (data) => {
  return {
    type: "GETFAVS",
    payload: data,
  };
};
