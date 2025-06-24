"use client"
import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialGithub,
} from "react-icons/ti";
import { IoCloudDownload } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="site-footer footer__ico pos-rel" data-background="assets/img/bg/footer_bg.png">
      <div className="container">
        <div className="row mt-none-30">
          {/* Newsletter Subscription */}
          <div className="col-lg-4 mt-30">
            <div className="footer__widget footer__subscribe">
              <h2>Subscribe to Our Newsletter</h2>
              <p>
                Stay updated with our latest news and offerings. Subscribe to our newsletter now!
              </p>

              <form action="">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                />
                <button>
                  <IoIosSend />
                </button>
              </form>
            </div>
          </div>

          {/* Downloadable Documents */}
          <div className="col-lg-8 mt-30">
            <div className="footer__widget text-lg-end">
              <h2>Download Our Documents</h2>

              <div className="footer__document ul_li_right">
                <a href="#" className="footer__document-item text-center" download>
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="PDF Icon" />
                  </div>
                  <span className="title">
                    <IoCloudDownload />
                    White Paper
                  </span>
                </a>
                <a href="#" className="footer__document-item text-center" download>
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="PDF Icon" />
                  </div>
                  <span className="title">
                    <IoCloudDownload />
                    One Pager
                  </span>
                </a>
                <a href="#" className="footer__document-item text-center" download>
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="PDF Icon" />
                  </div>
                  <span className="title">
                    <IoCloudDownload />
                    Privacy Policy
                  </span>
                </a>

                <a href="#" className="footer__document-item text-center" download>
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="PDF Icon" />
                  </div>
                  <span className="title">
                    <IoCloudDownload />
                    Terms of Sale
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Logo and Social Media Links */}
        <div className="footer__bottom ul_li_between mt-50">
          <div className="footer__logo mt-20">
            <a href="#">
              <img src="assets/img/logo/logo.png" alt="Company Logo" />
            </a>
          </div>

          <ul className="footer__social ul_li mt-20">
            <li>
              <a href="#">
                <TiSocialFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <TiSocialTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <TiSocialLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <TiSocialInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <TiSocialGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="footer__copyright mt-35">
        <div className="container">
          <div className="footer__copyright-inner ul_li_between">
            <div className="footer__copyright-text mt-15">
              &copy; 2024 Your Company. All Rights Reserved.
            </div>

            <ul className="footer__links ul_li_right mt-15">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookies Policy</a>
              </li>
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Decorative Icons */}
      <div className="footer__icon-shape">
        <div className="icon icon--1">
          <div>
            <img src="assets/img/shape/f_icon1.png" alt="Decorative Icon" />
          </div>
        </div>

        <div className="icon icon--2">
          <div>
            <img src="assets/img/shape/f_icon2.png" alt="Decorative Icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
