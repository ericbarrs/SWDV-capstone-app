export const CreateUserAction = ({ user }) => {
  return function (dispatch) {
    fetch("https://git.heroku.com/mylocalfood-server.git/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        dispatch(auth(data, "REGISTER"));
      });
  };
};

export const LoginAction = (body) => {
  return function (dispatch) {
    fetch("https://git.heroku.com/mylocalfood-server.git/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.token);
        dispatch(auth(data, "LOGIN"));
      });
  };
};

export const LogoutAction = () => {
  return function (dispatch) {
    localStorage.removeItem("token");
    dispatch(auth({}, "LOGOUT"));
  };
};

export const getAuth = () => {
  return function (dispatch) {
    const token = localStorage.getItem("token");
    fetch("https://mylocalfood-server.herokuapp.com/login/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(auth(data, "VERIFY"));
      });
  };
};

const auth = (data, type) => {
  return {
    type,
    payload: data,
  };
};
