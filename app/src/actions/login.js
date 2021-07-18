export const CreateUserAction = ({ user }) => {
  console.log(user);
  return function (dispatch) {
    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user }),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch(auth(data, "REGISTER"));
      });
  };
};

export const getAuth = () => {
  return function (dispatch) {};
};

const auth = (data, type) => {
  return {
    type,
    payload: data,
  };
};
