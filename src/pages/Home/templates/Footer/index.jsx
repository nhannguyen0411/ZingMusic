import React from "react";

import "./style.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="container-footer">
        <div className="brand">
          <img
            src="https://static-zmp3.zadn.vn/skins/zmp3-v5.1/images/icon_zing_mp3_60.png"
            alt="image"
          />
          <div className="content">
            <p>© 2015 VNG Corporation</p>
            <p>Giấy phép MXH số 314/GP-BTTTT.</p>
          </div>
        </div>
        <div className="info">
          <ul>
            <li>Giới Thiệu</li>
            <li>Copyright</li>
            <li>APIs</li>
          </ul>
          <ul>
            <li>Giới Thiệu</li>
            <li>Copyright</li>
            <li>APIs</li>
          </ul>
          <ul>
            <li>Giới Thiệu</li>
            <li>Copyright</li>
          </ul>
          <ul>
            <li>Giới Thiệu</li>
            <li>Copyright</li>
          </ul>
        </div>
        <div className="connect">
          <div className="third-party">
            <span>
              <i class="fab fa-facebook-f"></i>
            </span>
            <span>
              <i class="fab fa-google-plus-g"></i>
            </span>
            <span>
              <i class="fab fa-youtube"></i>
            </span>
          </div>
          <img
            src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=62f851ba-0cde-4801-8326-68a6d66bf97a"
            alt="image"
          />
          <p>Phiên bản Mobile</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
