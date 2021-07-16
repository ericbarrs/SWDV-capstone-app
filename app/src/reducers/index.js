import { combineReducers } from "redux";

const testing = (state = null, actions) => {
  if (actions.type === "testing") {
    state = actions.payload;
    return state;
  }
  return state;
};

const auth = (state = null, actions) => {
  if (actions.type === "authenticated") {
    state = actions.payload;
    return state;
  }
  if (actions.type === "verified") {
    state = actions.payload;
    return state;
  }
  if (actions.type === "logout") {
    state = null;
    return state;
  }
  return state;
};

const rootReducer = combineReducers({
  testing,
  auth,
});

export default rootReducer;
