import classNames from "classnames";
import React from "react";
import style from "./style.module.scss";
import Sale from "./Sale";
import star from "./star.svg";
import thumnail from "./thumnail.svg";
const cx = classNames.bind(style);

export default function CartCourse({ title }) {
  return (
    <div className={cx(style.wrapper)}>
      <img src={thumnail} alt="" />
      <span>
        Laravel 9 -Build Complete Multi Vendor Ecommerce Project A-ZIn This
        Course
      </span>
      <span className={cx(style.createdBy)}>Jack London</span>
      <div className={cx(style.rating)}>
        <span className={cx(style.number)}>4.5</span>
        <div className={cx(style.stars)}>
          <img src={star} alt="" />
          <img src={star} alt="" />

          <img src={star} alt="" />

          <img src={star} alt="" />

          <img src={star} alt="" />
        </div>
      </div>
      <div className={cx(style.price)}>
        <span>250.000 đ &nbsp;&nbsp;</span>
        <span className={cx(style.oldPrice)}> 350.000 đ</span>
      </div>
      <Sale />
    </div>
  );
}
