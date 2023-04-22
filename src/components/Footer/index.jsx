import classNames from "classnames";
import React from "react";

import style from "./style.module.scss";
import logo from "../../access/img/logo_light.svg";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);

export default function Footer() {
  return (
    <div className={cx(style.wrapper)}>
      <div className={cx(style.top)}>
        <div className={cx(style.footerItem)}>
          <h4>About us</h4>

          <Link>Chính sách bảo mật</Link>
          <Link>Điều khoản</Link>
        </div>
        <div className={cx(style.footerItem)}>
          <h4>Community</h4>

          <Link>Cộng đồng</Link>
          <Link>Blog</Link>
          <Link>Danh mục</Link>
        </div>
        <div className={cx(style.footerItem)}>
          <h4>Address</h4>

          <Link>Địa chỉ : 68/15 Tô Hiệu, Liên Chiểu Đà nẵng</Link>
          <Link>MST : 123456789</Link>
          <Link>Phone : 0866146741</Link>

          <Link>Email: trandai2401@gmail.com</Link>
        </div>
        <div className={cx(style.footerItem)}>
          <h4>About us</h4>

          <Link>Chính sách bảo mật</Link>
          <Link>Điều khoản</Link>
        </div>
      </div>
      <hr></hr>
      <div className={cx(style.bottom)}>
        <img src={logo} alt="" />
        <span>© 2022 Công ty TNHH Công Nghệ Giáo Dục Topica Việt Nam</span>
      </div>
    </div>
  );
}
