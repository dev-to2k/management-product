import * as types from "./../constants/ActionTypes";
import CallApi from "./../utils/apiCaller";

export const fetchProductsRequest = () => {
  return (dispatch) => {
    return CallApi("products", "GET", null).then((res) => {
      dispatch(fetchProducts(res.data));
    });
  };
};

export const fetchProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products,
  };
};
