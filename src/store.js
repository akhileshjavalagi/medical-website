import { combineReducers, legacy_createStore, applyMiddleware , compose } from "redux"; 
import thunk from "redux-thunk"
import { signupReducer } from "./redux/Signup/reducer";
import { loginReducer } from "./redux/Signin/reducer";


//this is the rootReducer which combines all the actions and reducer funcitons
const rootReducer = combineReducers({
    sign: signupReducer,
    login : loginReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

//this is the store which stores the rootReducer
const store = legacy_createStore(rootReducer,
    composeEnhancer(applyMiddleware(thunk))
    );

export default store;