import { combineReducers } from "redux";

let initialUserState = {
  token: "",
  email: "",
  _id: "",
  isAuthenticated: false,
  loading: false,
  errors: {},
};

let logOutState = {
  token: "",
  email: "",
  _id: "",
  errors: {},
  isAuthenticated: false,
  loading: false,
};

let InitalFilterPrice = "four";

function favs(
  state = [
    { id: "", categories: [{ title: "" }], location: { display_address: [] } },
  ],
  actions
) {
  if (actions.type === "GETFAVS") {
    state = actions.payload;
    return state;
  }
  if (actions.type === "LOGOUT") {
    return (state = []);
  }
  return state;
}

function savedRestaurants(state = { likes: [], dislikes: [] }, actions) {
  if (actions.type === "STATUS") {
    state = actions.payload;
    return state;
  }
  if (actions.type === "LIKE") {
    state = actions.payload;
    return state;
  }
  if (actions.type === "DISLIKE") {
    state = actions.payload;
    return state;
  }
  if (actions.type === "LOGOUT") {
    return (state = {});
  }
  return state;
}

function LandingPageRest(state = [], actions) {
  if (actions.type === "LANDINGPAGE") {
    state = actions.payload;
    return state;
  }
  return state;
}

function restaurants(state = [], actions) {
  if (actions.type === "MAINPAGE") {
    state = actions.payload;
    return state;
  }
  if (actions.type === "RESET") {
    state = actions.payload;
    return state;
  }

  if (actions.type === "LOGOUT") {
    return (state = []);
  }
  return state;
}

function filterPrice(state = InitalFilterPrice, actions) {
  if (actions.type === "FILTER") {
    state = actions.payload;
    return state;
  }
  return state;
}

function user(state = initialUserState, action) {
  if (action.type === "LOGIN") {
    return (state = {
      ...state,
      ...action.payload.user,
      token: action.payload.token,
      errors: {},
      isAuthenticated: action.payload.isAuthenticated,
      loading: false,
    });
  } else if (action.type === "REGISTER") {
    return (state = {
      ...state,
      ...action.payload.user,
      token: action.payload.token,
      errors: {},
      isAuthenticated: action.payload.isAuthenticated,
      loading: false,
    });
  } else if (action.type === "VERIFY") {
    return (state = {
      ...state,
      ...action.payload.user,
      token: action.payload.token,
      errors: {},
      isAuthenticated: action.payload.isAuthenticated,
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
  filterPrice,
  savedRestaurants,
  favs,
  LandingPageRest,
});

export default rootReducer;
