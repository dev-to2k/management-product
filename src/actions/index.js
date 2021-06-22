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

export const deleteProductRequest = (id) => {
  return (dispatch) => {
    return CallApi(`products/${id}`, "DELETE", null).then((res) => {
      dispatch(deleteProduct(id));
    });
  };
};

export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id,
  };
};

export const addProductRequest = (product) => {
  return (dispatch) => {
    return CallApi("products", "POST", product).then((res) => {
      dispatch(addProduct(res.data));
    });
  };
};

export const addProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product,
  };
};

export const getProductRequest = (id) => {
  return (dispatch) => {
    CallApi(`products/${id}`, "GET", null).then((res) => {
      dispatch(getProduct(res.data));
    });
  };
};

export const getProduct = (product) => {
  return {
    type: types.EDIT_PRODUCT,
    product,
  };
};

export const updateProductRequest = (product) => {
  return (dispatch) => {
    CallApi(`products/${product.id}`, "PUT", product).then((res) => {
      dispatch(updateProduct(res.data));
    });
  };
};

export const updateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
  };
};
