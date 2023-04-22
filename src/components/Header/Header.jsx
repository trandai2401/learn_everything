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

const cx = classNames.bind(style);

export default function Header() {
  return (
    <div className={cx(style.wrapper)}>
      <div className={cx(style.left)}>
        <img className={cx(style.logo)} src={logo} alt="" />
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
        <Button>Đăng nhập</Button>
        <Button border={true}>Đăng ký</Button>
      </div>
    </div>
  );
}
