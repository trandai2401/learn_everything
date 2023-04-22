import React from "react";

import style from "./style.module.scss";

import classNames from "classnames";

const cx = classNames.bind(style);
export default function Button({ children, border = false }) {
  return (
    <button
      className={cx(style.wrapper, style.button, { [style.border]: border })}
    >
      {children}
    </button>
  );
}
