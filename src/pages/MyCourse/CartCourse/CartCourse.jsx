import classNames from "classnames";
import React, { useMemo } from "react";
import style from "./style.module.scss";

import { Popover, Progress } from "antd";

import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);

export default function CartCourse({ course, courseId }) {
  console.log(course);
  const navigate = useNavigate();
  return (
    <div
      className={cx(style.wrapper)}
      onClick={() => {
        navigate("/watch/" + course.id);
      }}
    >
      <img
        src={course.image.mediumUrl}
        alt=""
        style={{ maxHeight: "140px", objectFit: "cover" }}
      />
      <span>{course.title}</span>
      <span className={cx(style.createdBy)}>
        {course?.created_by?.fullName}
      </span>

      <div className={cx(style.price)}>
        <span>Đang học</span>
        <Progress percent={30} size="small" />
      </div>
    </div>
  );
}
