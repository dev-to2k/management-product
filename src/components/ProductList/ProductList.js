import React from "react";
export default function ProductList(props) {
  const { children } = props;
  return (
    <div className="tab-content">
      <div className="tab-pane active" id="home" role="tabpanel">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Ma</th>
              <th scope="col">Ten</th>
              <th scope="col">Gia</th>
              <th scope="col">Trang thai</th>
              <th scope="col">Hanh dong</th>
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}
