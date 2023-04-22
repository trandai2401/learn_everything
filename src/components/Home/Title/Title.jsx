import classNames from "classnames";
import React from "react";

import style from "./style.module.scss";

const cx = classNames.bind(style);

export default function Title({ text, strong }) {
  return (
    <div className={cx(style.wrapper)}>
      <span>{text} </span>
      <span className={cx(style.strong)}>{strong}</span>
      <hr />
    </div>
  );
}
