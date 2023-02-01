import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-fluid p-3">
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
        <div className="container-fluid p-3">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                {" "}
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1" to="/">
                    Demo Store
                  </Link>
                  <Link className="text-white py-2" to="/">
                    <address className="fs-6">
                      Jl. Cisitu Indah Vll No. 98, 40135 Bandung, Indonesia
                    </address>
                  </Link>
                  <Link className="text-white py-2" to="/">
                    <a href="tel:+62 22 203 1234" className="d-block ">
                      +62 22 203 1234
                    </a>
                  </Link>
                  <Link className="text-white py-2 mb-1" to="/">
                    <a href="mailto:Tokobagus@gmail.com" className="d-block">
                      Tokobagus@gmail.com
                    </a>
                    <div className="social_icons d-flex align-items-center gap-30 mt-4">
                      <a href="/">
                        <BsLinkedin className="text-white fs-4" />
                      </a>
                      <a href="/">
                        <BsFacebook className="text-white fs-4" />
                      </a>
                      <a href="/">
                        <BsInstagram className="text-white fs-4" />
                      </a>
                      <a href="/">
                        <BsYoutube className="text-white fs-4" />
                      </a>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div>
                {" "}
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1" to="/">
                    Privacy Policy
                  </Link>
                  <Link className="text-white py-2 mb-1" to="/">
                    Refund Policy
                  </Link>
                  <Link className="text-white py-2 mb-1" to="/">
                    Shipings Policy
                  </Link>
                  <Link className="text-white py-2 mb-1" to="/">
                    Terms & Service
                  </Link>
                  <Link className="text-white py-2 mb-1" to="/">
                    Blogs
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div>
                {" "}
                <div className="footer-links d-flex flex-column">
                  <Link className="text-white py-2 mb-1" to="/">
                    Search
                  </Link>
                  <Link className="text-white py-2 mb-1" to="/">
                    About Us
                  </Link>
                  <Link className="text-white py-2 mb-1" to="/">
                    Faq
                  </Link>
                  <Link className="text-white py-2 mb-1" to="/">
                    Contact
                  </Link>
                  <Link className="text-white py-2 mb-1" to="/">
                    Size Chart
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1" to="/">
                  Accessories
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Laptops
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Headphone
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Smart Watches
                </Link>
                <Link className="text-white py-2 mb-1" to="/">
                  Tablets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-fluid p-3">
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
};

export default Footer;
