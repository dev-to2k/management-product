import React, { useEffect, useState } from "react";
import CallApi from "./../../utils/apiCaller";
import { Link } from "react-router-dom";

export default function ProductActionPage(props) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [checkStatus, setcheckStatus] = useState(false);

  useEffect(() => {
    let { match } = props;
    if (match) {
      var id = match.params.id;
      CallApi(`products/${id}`, "GET", null).then((res) => {
        var data = res.data;
        setId(data.id);
        setName(data.name);
        setPrice(data.price);
        setcheckStatus(data.status);
      });
    }
  }, [props]);

  const onSave = (e) => {
    let { history } = props;
    e.preventDefault();
    if (id) {
      // update
      CallApi(`products/${id}`, "PUT", {
        name: name,
        price: price,
        status: checkStatus,
      }).then((res) => {
        history.push("/product-list");
      });
    } else {
      CallApi("products", "POST", {
        name: name,
        price: price,
        status: checkStatus,
      }).then((res) => {
        history.push("/product-list");
      });
    }
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
