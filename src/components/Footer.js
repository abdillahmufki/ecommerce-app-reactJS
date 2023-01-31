import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Sign Up for NewsLetter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div></div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div></div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div></div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links">
                <Link className="text-white py-2 mb-1" to="/">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Handphones
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Tablet
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Watch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0">
                &copy; {new Date().getFullYear()}; Powered by Toko Bagus
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
