import { combineReducers } from "redux";

const testing = (state = null , actions) => {
    if(actions.type === "testing"){
        state = actions.payload
        return  state
    }
	return state;
};

const rootReducer = combineReducers({
	testing
});

export default rootReducer;