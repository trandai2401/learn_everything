import classNames from "classnames";
import React from "react";

import style from "./style.module.scss";

const cx = classNames.bind(style);
export default function CircleBotton({ icon }) {
  return (
    <button className={cx(style.wrapper)}>
      <img src={icon} alt="" />
    </button>
  );
}
