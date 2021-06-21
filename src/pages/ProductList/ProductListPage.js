import React, { useEffect } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItem from "../../components/ProductItem/ProductItem";
import { connect } from "react-redux";
import CallApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";
import { findIndex } from "lodash";
import { fetchProductsRequest } from "./../../actions/index";

function ProductListPage(props) {
  const { products, fetchAllProducts } = props;

  useEffect(() => {
    fetchAllProducts();
  }, [fetchAllProducts]);

  const onDelete = (id) => {
    CallApi(`products/${id}`, "DELETE", null).then((res) => {
      if (res.status === 200) {
        // OK
        var index = findIndex(products, (o) => {
          return o.id === id;
        });

        if (index !== -1) {
          products.splice(index, 1);
        }
      }
    });
  };

  const showProduct = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} index={index} btnDelete={onDelete} />;
      });
    }
    return result;
  };

  return (
    <div className="col-md-12 shadow rounded mt-5">
      <Link to="product/add" className="btn btn-primary my-3">
        Them san pham
      </Link>
      <div className="list-group" id="myList" role="tablist">
        <span className="list-group-item list-group-item-action active">Quan ly san pham</span>
      </div>
      <ProductList>{showProduct(products)}</ProductList>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => {
      dispatch(fetchProductsRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
