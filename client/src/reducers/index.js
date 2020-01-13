import { combineReducers } from "redux";
import inventoryReducer from "./inventoryReducer";
import errorReducer from "./errorReducer";
import authReducer from "./authReducer";


export default combineReducers ({
  item: inventoryReducer,
  error: errorReducer,
  auth: authReducer
})

