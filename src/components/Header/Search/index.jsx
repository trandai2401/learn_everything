import React from "react";

import style from "./style.module.scss";
import icon from "./search_icon.svg";
import classNames from "classnames";

const cx = classNames.bind(style);

export default function Search() {
  return (
    <div className={cx(style.wrapper)}>
      <img src={icon} alt="" />
      <form action="">
        <input type="text" spellCheck={false} placeholder="Tìm kiếm khóa học" />
      </form>
    </div>
  );
}
