import React from "react";
import style from "./style_item_cart.module.scss";
import classNames from "classnames";
import start_1 from "../Course/start-1.svg";
import start_5 from "../Course/start-5.svg";
import star_0 from "../Course/start-0.svg";
import formatNumber from "../../unitls";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../redux/cartSlice";
const cx = classNames.bind(style);
export default function ItemCart({ idCart, course }) {
  const dispatch = useDispatch();

  return (
    <div className={cx([style.wrapper])}>
      <img src={course.image.mediumUrl} alt="" />
      <div className={cx([style.info])}>
        <span className={cx([style.title])}>{course.title}</span>

        <span className={cx([style.created_by])}>
          By : {course.created_by.fullName}
        </span>
        <div className={cx([style.rating])}>
          <span className={cx([style.number])}>4.5</span>{" "}
          <img src={start_1} alt="" /> <img src={start_1} alt="" />{" "}
          <img src={start_1} alt="" /> <img src={start_5} alt="" />
          <img src={star_0} alt="" />
          <span className={cx([style.number_review])}>(200 000 reviews)</span>
        </div>
        <span className={cx([style.numberOfLecture])}>12 bafi lafy</span>
      </div>
      <div
        className={cx([style.remove])}
        onClick={() => {
          dispatch(deleteCart(idCart));
        }}
      >
        Remove
      </div>
      <div className={cx([style.price])}>{formatNumber(course.price)} đ</div>
    </div>
  );
}
