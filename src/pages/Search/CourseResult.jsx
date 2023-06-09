import React from "react";
import style from "./style_result.module.scss";
import classNames from "classnames";
import { Image } from "antd";
import formatNumber from "../../unitls";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);

export default function CourseResult({ course }) {
  const navigate = useNavigate();

  return (
    <>
      {" "}
      <div
        className={cx([style.wrapper])}
        onClick={() => {
          navigate("/course/" + course.id);
        }}
      >
        <img
          src={course.image.thumbUrl}
          alt=""
          height={"100%"}
          width={"250px"}
        />
        <div className={cx([style.detail])}>
          <span className={cx([style.title])}>{course.title}</span>
          <span className={cx([style.description])}>
            {course.description.substring(0, 100)}...
          </span>
          <span className={cx([style.created_by])}>
            {" "}
            {course.created_by.fullName}
          </span>
          <span className={cx([style.lectures])}>
            {course.sections.reduce((pre, cur) => {
              return pre + cur.items.length;
            }, 0)}{" "}
            bài học
          </span>
        </div>
        <div className={cx([style.price])}>
          <span>{formatNumber(course.price)} đ</span>
        </div>
      </div>
      <hr className={cx([style.hr])} />
    </>
  );
}
