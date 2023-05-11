import classNames from "classnames";
import React from "react";

import logo from "./logo.svg";
import logo_category from "./logo-category.svg";
import cart from "./cart.svg";
import cartHover from "./cart-hover.svg";

import style from "./style.module.scss";
import Search from "./Search";
import Button from "../Button/Button";
import BottonIcon from "../Button/BottonIcon";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

export default function Header() {
  return (
    <div className={cx(style.wrapper)}>
      <div className={cx(style.left)}>
        <Link to={""}>
          <img className={cx(style.logo)} src={logo} alt="" />
        </Link>
        <div className={cx(style.category_wrapper)}>
          <img src={logo_category} alt="" />
          <span>Danh mục</span>
        </div>
      </div>
      <div className={cx(style.center)}>
        <Search />
      </div>
      <div className={cx(style.right)}>
        <BottonIcon icon={cart} iconHover={cartHover} />
        <Button>
          <Link
            to={"./login"}
            style={{ textDecoration: "none", color: "var(--primary)" }}
          >
            Đăng nhập
          </Link>
        </Button>
        <Button border={true}>
          <Link to={"./sign_up"} style={{ textDecoration: "none" }}>
            Đăng ký
          </Link>
        </Button>
      </div>
    </div>
  );
}
