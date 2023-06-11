import classNames from "classnames";
import React, { useMemo } from "react";
import style from "./style.module.scss";

import { Popover, Progress } from "antd";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
const cx = classNames.bind(style);

export default function CartCourse({ course, courseId }) {
  console.log(course);
  const navigate = useNavigate();
  const [learn, setLearn] = useState([0, 0]);
  useEffect(() => {
    const count = course?.sections?.reduce((pre, sec) => {
      return pre + sec.items.length;
    }, 0);

    const learned = course?.sections?.reduce((pre, sec) => {
      return (
        pre +
        sec.items.reduce((pre, item) => {
          if (item.learned) return pre + 1;
          return pre;
        }, 0)
      );
    }, 0);
    setLearn([count, learned]);
  }, []);
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
        <Progress
          percent={
            learn[0] == 0 ? 100 : Math.round((learn[1] / learn[0]) * 100)
          }
          size="default"
        />
      </div>
    </div>
  );
}
