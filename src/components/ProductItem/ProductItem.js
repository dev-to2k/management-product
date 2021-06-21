import React from "react";
import { Link } from "react-router-dom";

export default function ProductItem(props) {
  var { product, index, btnDelete } = props;
  var statusName = product.status ? "Con hang" : "Het hang";
  var statusClass = product.status ? "bg-warning" : "bg-danger";

  const onDelete = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      btnDelete(id);
    }
  };

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td>{product.price}</td>
      <td>
        <span style={{ cursor: "pointer" }} className={`badge ${statusClass}`}>
          {statusName}
        </span>
      </td>
      <td>
        <Link to={`/product/${product.id}/edit`} className="btn btn-primary me-3">
          Sua
        </Link>
        <button className="btn btn-danger" onClick={() => onDelete(product.id)}>
          Xoa
        </button>
      </td>
    </tr>
  );
}
