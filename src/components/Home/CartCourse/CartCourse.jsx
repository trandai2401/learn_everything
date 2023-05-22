import classNames from "classnames";
import React, { useMemo } from "react";
import style from "./style.module.scss";
import Sale from "./Sale";
import star from "./star.svg";
import thumnail from "./thumnail.svg";
import { Popover } from "antd";
import Button from "../../Button/Button";
import formatNumber from "../../../unitls";
import cartService from "../../../service/cartService";
import { useDispatch } from "react-redux";
import { setStatus, updateCarts } from "../../../redux/cartSlice";
const cx = classNames.bind(style);

export default function CartCourse({ course }) {
  const dispatch = useDispatch();
  const content = useMemo(
    () => (
      <div className={cx([style["wrapper-poper"]])}>
        <div style={{ display: "flex", justifyItems: "center" }}>
          <img
            width={"80%"}
            style={{ margin: "0 auto", maxHeight: "170px", objectFit: "cover" }}
            src={course.image.url}
            alt=""
          />
        </div>

        <p>Content</p>
        <span>{course.description}</span>
        <span className={cx(style.createdBy)}>Jack London</span>
        <Button
          onClick={async () => {
            await cartService.add(course.id);
            dispatch(updateCarts());
            dispatch(setStatus(true))
          }}
          styles={{ display: "block", height: "35px" }}
          colorText={"white"}
          children={"Thêm"}
          backgrourdColor={"var(--main-color)"}
          border
          fontSize={16}
        >
          Thêm
        </Button>
      </div>
    ),
    []
  );

  return (
    <Popover placement="leftTop" content={content}>
      <div className={cx(style.wrapper)}>
        <img
          src={course.image.mediumUrl}
          alt=""
          style={{ maxHeight: "140px", objectFit: "cover" }}
        />
        <span>{course.title}</span>
        <span className={cx(style.createdBy)}>
          {course?.created_by?.fullName}
        </span>
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
          <span> {formatNumber(course.price)} đ &nbsp;&nbsp;</span>
          <span className={cx(style.oldPrice)}> 350.000 đ</span>
        </div>
        <Sale />
      </div>
    </Popover>
  );
}
