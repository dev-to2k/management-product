import * as types from "./../constants/ActionTypes";

var initialState = {
  id: "",
  name: "",
  price: "",
  status: false,
};

const itemEditing = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_PRODUCT:
      state = action.product;
      return state;
    default:
      return state;
  }
};

export default itemEditing;
