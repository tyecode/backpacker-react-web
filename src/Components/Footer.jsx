import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
        <div className="container">
          <div className="footer--content">
            <div className="copyright">©2022 <span><Link to='/'>Backpacker</Link></span> / All rights reserved.</div>
            <div className="social-media">
              <a href="#facebook"><i className="fa-brands fa-facebook-square"></i></a>
              <a href="#twitter"><i className="fa-brands fa-twitter-square"></i></a>
              <a href="#instagram"><i className="fa-brands fa-instagram-square"></i></a>
              <a href="#linkedin"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;