import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addProductRequest, getProductRequest, updateProductRequest } from "./../../actions/index";
import { connect } from "react-redux";

function ProductActionPage(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [checkStatus, setcheckStatus] = useState(false);

  var { match, onEditProduct, history, onAddProduct, itemEditing, onUpdateProduct } = props;

  useEffect(() => {
    if (match) {
      var id = match.params.id;
      onEditProduct(id);
    }
  }, [match, onEditProduct]);

  useEffect(() => {
    setId(itemEditing.id);
    setName(itemEditing.name);
    setPrice(itemEditing.price);
    setcheckStatus(itemEditing.status);
  }, [itemEditing]);

  useEffect(() => {
    setId("");
    setName("");
    setPrice("");
    setcheckStatus(false);
  }, []);

  const onSave = () => {
    let product = {
      id: id,
      name: name,
      price: price,
      status: checkStatus,
    };
    if (id) {
      // update
      onUpdateProduct(product);
    } else {
      // add
      onAddProduct(product);
    }
    history.push("/product-list");
  };

  return (
    <div className="col-md-6 mt-5 shadow rounded p-3">
      <form onSubmit={onSave}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Ten san pham:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="price">
            Gia:
          </label>
          <input
            type="text"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Trang thai:</label>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            value={checkStatus}
            onChange={(e) => {
              setcheckStatus(e.target.checked);
            }}
            checked={checkStatus}
          />
          <label className="form-check-label">Con hang</label>
        </div>
        <button type="submit" className="btn btn-primary me-3">
          Luu lai
        </button>
        <Link className="btn btn-danger" to="/product-list">
          Tro lai
        </Link>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    itemEditing: state.itemEditing,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddProduct: (product) => {
      dispatch(addProductRequest(product));
    },
    onEditProduct: (id) => {
      dispatch(getProductRequest(id));
    },
    onUpdateProduct: (product) => {
      dispatch(updateProductRequest(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);
