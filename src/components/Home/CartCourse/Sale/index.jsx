import classNames from "classnames";
import React from "react";
import style from "./style.module.scss";

const cx = classNames.bind(style);
export default function Sale() {
  return (
    <div className={cx(style.wrapper)}>
      <span className={cx(style.sale)}>Bestseller</span>
    </div>
  );
}
