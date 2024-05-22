import React from 'react';
import { NavLink } from 'react-router-dom';
function header() {
  return (
    <div id='navbar_top'>
  <div className="p-3 text-center navbar-background-color">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-6 d-flex justify-content-start mb-3 mb-md-0">
          <a href="#!" className="ms-md-2">
            <img src="assets/logo.png" height="60" width="55"className='img-fluid' />
          </a>
        </div>
        <div className="col-md-6 hide_nav">
        <NavLink
                  to="/"
                  className="navbar_text_1 me-3"
                  activeClassName="active"
                >
                  Solana Meme Maker
                </NavLink>
                <NavLink
                  to="/image-to-text"
                  className="navbar_text_1"
                  activeClassName="active"
                >
                  Image to Text
                </NavLink>
        {/* <a className="navbar_text_1 me-3" href="#">
        Solana Meme Maker
            </a> */}
            {/* <a className="navbar_text_1" href="#">
            Image to Text
            </a> */}
        </div>
        <div className="col-md-3 col-6 d-flex justify-content-end align-items-center">
          <div className="d-flex">
          <img src="assets/navbar_logo.png" height="60" width="55" className='img-fluid' />
          </div>
        </div>
        <div className="col-12 show_nav d-none">
        <NavLink
                  to="/"
                  className="navbar_text_1 me-3"
                >
                  Solana Meme Maker
                </NavLink>
                <NavLink
                  to="/image-to-text"
                  className="navbar_text_1"
                >
                  Image to Text
                </NavLink>
        </div>
      </div>
    </div>
  </div>
    </div>
  );
}

export default header;
