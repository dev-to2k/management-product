import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  const menus = [
    {
      name: "Trang chu",
      to: "/",
      exact: true,
    },
    {
      name: "Quan ly san pham",
      to: "/product-list",
      exact: false,
    },
  ];

  const showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <li className="nav-item" key={index}>
            <NavLink exact={menu.exact} to={menu.to} className="nav-link" activeClassName="active text-danger">
              {menu.name}
            </NavLink>
          </li>
        );
      });
    }
    return result;
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">{showMenu(menus)}</ul>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
