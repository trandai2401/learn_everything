import React from "react";
import style from "./style_course.module.scss";
import classNames from "classnames";
import { Image } from "antd";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);
export default function Course({ course }) {
  const navigate = useNavigate();
  return (
    <div className={cx([style.course])}>
      <Image
        height={"100%"}
        src={course.image.thumbUrl}
      />
      <div className={cx([style.detail])}>
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <div
          onClick={() => {
            navigate("/dashboard/coursies/"+course.id);
          }}
          className={cx([style.edit])}
        >
          <h1>Chỉnh sửa</h1>
        </div>
      </div>

      <div className={cx([style.comment])}>
        <h2>Binh luận</h2>
        <h3>{course.comments.length}</h3>
      </div>

      <div className={cx([style.comment])}>
        <h2>Học viên</h2>
        <h3>{course.carts.length}</h3>
      </div>
    </div>
  );
}
