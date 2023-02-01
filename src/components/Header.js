import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../App.css";
import Home from "../pages/Home";
import { BsSearch } from "react-icons/bs";

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">Free Shiping $100 Free Returns</p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Hotline:{" "}
                <a className="text-white" href="tel:+02122100035">
                  +021-22100035
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="header-upper py-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-2">
              <h1>
                <Link className="text-white" to={Home}>
                  TokoBagus
                </Link>
              </h1>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search Products Here..."
                  aria-label="Search Products Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-link d-flex justify-content-between align-items-center">
                <div className="header-upper-link-item">
                  <Link className="d-flex align-items-center gap-10" to={Home}>
                    <img src="images/compare.svg" alt="compare" />
                    <p className="text-white mb-0">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div className="header-upper-link-item">
                  <Link className="d-flex align-items-center gap-10" to={Home}>
                    <img src="images/wishlist.svg" alt="wishlist" />
                    <p className="text-white mb-0">
                      Favorite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div className="header-upper-link-item">
                  <Link className="d-flex align-items-center gap-10" to={Home}>
                    <img src="images/user.svg" alt="Account" />
                    <p className="text-white mb-0">
                      Login <br /> My Account
                    </p>
                  </Link>
                </div>
                <div className="header-upper-link-item">
                  <Link className="d-flex align-items-center gap-10" to={Home}>
                    <img src="images/cart.svg" alt="cart" />
                    <div className="d-flex flex-column">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="text-white mb-0">$ 5000</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-15">
                <div>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      <img src="images/menu.svg" alt="" />{" "}
                      <span className="me-5 d-inline-block">
                        Shop Categories
                      </span>
                    </button>
                    <ul class="dropdown-menu">
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item text-white" to="">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/"}>Our Store</NavLink>
                    <NavLink to={"/"}>Blogs</NavLink>
                    <NavLink to={"/contact"}>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
