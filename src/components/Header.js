import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Header() {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
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
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <h1>{/* <Link>DevCorner.</Link> */}</h1>
            </div>
            <div className="col-5"></div>
            <div className="col-5"></div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
