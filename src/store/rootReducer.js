
import { combineReducers } from "redux";
import userSlice from "./reduxSlices/userSlice";

const rootReducer = combineReducers({
     users : userSlice
})

export default rootReducer;