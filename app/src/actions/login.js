require("dotenv").config();

export const CreateUserAction = ({ user }) => {
    return function (dispatch) {
        fetch(`${process.env.REACT_APP_BASE_URL}users`, {
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

export const LoginAction = (user) => {
    console.log(user);
    return function (dispatch) {
        fetch(`${process.env.REACT_APP_BASE_URL}login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((data) => {
                localStorage.setItem("token", data.token);
                dispatch(auth(data, "LOGIN"));
            });
    };
};

export const UpdateUserAction = (token, user) => {
    return function (dispatch) {
        fetch(`${process.env.REACT_APP_BASE_URL}users`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ token, user }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // dispatch(auth(data, "UPDATEUSER"));
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
        fetch(`${process.env.REACT_APP_BASE_URL}login/verify`, {
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
