import React, { useState } from "react";
import style from "./style.module.scss";

import classNames from "classnames";

const cx = classNames.bind(style);
export default function BottonIcon({ icon, iconHover, ...props }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      {...props}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      className={cx(style.wrapper)}
    >
      <img src={hover ? iconHover : icon} alt="" />
    </button>
  );
}
