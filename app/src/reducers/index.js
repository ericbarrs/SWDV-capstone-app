import { combineReducers } from "redux";

let initialUserState = {
  token: localStorage.getItem("token"),
  email: localStorage.getItem("user"),
  id: localStorage.getItem("id"),
  isAuthenticated: false,
  loading: false,
  errors: {},
};

let logOutState = {
  token: "",
  email: "",
  id: "",
  errors: {},
  isAuthenticated: false,
  loading: false,
};

function restaurants(state = [], actions) {
  if (actions.type === "LandingPage") {
    state = actions.payload;
    return state;
  }
  return state;
}

function user(state = initialUserState, action) {
  if (action.type === "LOGIN") {
    return (state = {
      ...state,
      ...action.payload,
      errors: {},
      isAuthenticated: true,
      loading: false,
    });
  } else if (action.type === "REGISTER") {
    return (state = {
      ...state,
      ...action.payload,
      errors: {},
      isAuthenticated: true,
      loading: false,
    });
  } else if (action.type === "SETTINGS") {
    return (state = { ...state, ...action.payload, loading: false });
  } else if (action.type === "ERRORS") {
    return (state = { ...state, ...action.payload, loading: false });
  } else if (action.type === "LOGOUT") {
    return (state = logOutState);
  } else {
    return state;
  }
}

const rootReducer = combineReducers({
  user,
  restaurants,
});

export default rootReducer;
