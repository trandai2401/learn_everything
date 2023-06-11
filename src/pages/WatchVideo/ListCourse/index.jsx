import { Menu } from "antd";
import React, { useEffect, useMemo } from "react";

import style from "./style.module.scss";
import classNames from "classnames";
import check from "./check.svg";
import uncheck from "./uncheck.svg";
import "./style.css";
import cartService from "../../../service/cartService";

const cx = classNames.bind(style);
function getItem(label, key, icon, children, type, className) {
  return {
    key,
    icon,
    children,
    label,
    type,
    className,
  };
}

export default function ListCourse({
  refresh,
  courseId,
  sections,
  lectureBeingLearned,
  setLectureSelected,
}) {
  useEffect(() => {
    setLectureSelected(
      lectureBeingLearned
        ? `lec-${lectureBeingLearned}`
        : `lec-${sections[0]?.items[0].id}`
    );
  }, []);

  const items = useMemo(() => {
    const items = sections?.map((section) =>
      getItem(
        section.title,
        `sec-${section.id}`,
        null,
        section.items.map((item) =>
          getItem(
            item.title,
            `lec-${item.id}`,
            <img alt="" src={item.learned ? check : uncheck} />,
            null,
            null,
            cx([style.item, "item-lecture"])
          )
        ),
        null,
        cx([style.submenu, "item-lecture"])
      )
    );
    return items;
  }, [sections]);
  const onClick = (e) => {
    console.log(e);
    cartService
      .updateLecturingBeLearn(courseId, +e.key.substring(4))
      .then(() => {
        refresh();
      });
    setLectureSelected(e.key);
  };

  // console.log(
  //   lectureBeingLearned
  //     ? `lec-${lectureBeingLearned}`
  //     : `lec-${sections[0]?.items[0].id}`
  // );

  return (
    <Menu
      defaultOpenKeys={sections.map((sec) => `sec-${sec.id}`)}
      className={cx(style.wapper)}
      onClick={onClick}
      style={{ width: "100%" }}
      defaultSelectedKeys={
        lectureBeingLearned
          ? `lec-${lectureBeingLearned}`
          : `lec-${sections[0]?.items[0].id}`
      }
      mode="inline"
      items={items}
    ></Menu>
  );
}
