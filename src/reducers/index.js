import { combineReducers } from "redux";
import products from "./products";
import itemEditing from "./ItemEditing";
const appReducer = combineReducers({ products, itemEditing });

export default appReducer;
