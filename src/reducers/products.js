import * as types from "./../constants/ActionTypes";
import { findIndex } from "lodash";

var initialState = [];

const product = (state = initialState, action) => {
  var { id, product } = action;
  var index = -1;
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      state = action.products;
      return [...state];
    case types.DELETE_PRODUCT:
      index = findIndex(state, (o) => {
        return o.id === id;
      });
      state.splice(index, 1);
      return [...state];
    case types.ADD_PRODUCT:
      state.push(action.product);
      return [...state];
    case types.UPDATE_PRODUCT:
      index = findIndex(state, (o) => {
        return o.id === product.id;
      });
      state[index] = product;
      return [...state];
    default:
      return [...state];
  }
};

export default product;
