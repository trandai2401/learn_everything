import { Avatar, List } from "antd";
import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
const cx = classNames.bind(style);

export default function General({ course }) {
  console.log(course?.course.created_by?.avatar?.thumbUrl);
  return (
    <div>
      {course?.course.description}

      <div className={cx([style.created_by])}>
        <Avatar
          size={64}
          src={
            course?.course.created_by?.avatar?.thumbUrl ||
            "https://avatars.githubusercontent.com/u/97165289"
          }
        />
        <h4>{course?.course.created_by.fullName}</h4>
      </div>
      <div>
        <h5>Danh sách khóa học: </h5>
        <List
          itemLayout="horizontal"
          dataSource={course.course.created_by.ownedCourses}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar shape="square" size={64} src={item.image.thumbUrl} />
                }
                title={
                  <Link to={"/course-detail/" + item.id}>{item.title}</Link>
                  // <a href="https://ant.design">{item.title}</a>
                }
                description={item.description}
              />
            </List.Item>
          )}
        />
      </div>
    </div>
  );
}
