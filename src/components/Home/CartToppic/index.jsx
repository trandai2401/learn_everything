import classNames from "classnames";
import React from "react";
import style from "./style.module.scss";

const cx = classNames.bind(style);

export default function CartToppic() {
  return (
    <div className={cx(style.wrapper)}>
      <span>CartToppic</span>
    </div>
  );
}
