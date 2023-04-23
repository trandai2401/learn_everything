import React from "react";

import style from "./style.module.scss";

import classNames from "classnames";

const cx = classNames.bind(style);
export default function Button({
  children,
  border = false,
  colorText,
  backgrourdColor,
  fontSize,
  styles,
  ...props
}) {
  return (
    <button
    style={{...styles,backgroundColor : backgrourdColor, color: colorText, fontSize: fontSize}}
      className={cx(style.wrapper, style.button, { [style.border]: border })}
      {...props}
    >
      {children}
    </button>
  );
}
