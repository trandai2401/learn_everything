import React, { useRef } from "react";

import style from "./style.module.scss";
import icon from "./search_icon.svg";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);

export default function Search() {
  const keywordRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div className={cx(style.wrapper)}>
      <img src={icon} alt="" />
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log(keywordRef.current.value);
          navigate("/search?keyword=" + keywordRef.current.value);
        }}
      >
        <input
          type="text"
          name="keyword"
          spellCheck={false}
          placeholder="Tìm kiếm khóa học"
          ref={keywordRef}
        />
      </form>
    </div>
  );
}
