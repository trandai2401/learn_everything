import { Menu } from "antd";
import React, { useEffect, useMemo } from "react";
import uncheck from "./uncheck.svg";

import style from "./style.module.scss";
import classNames from "classnames";
import check from "./check.svg";
import "./style.css";
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
            <img alt="" src={uncheck} />,
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
    setLectureSelected(e.key);
  };
  return (
    <Menu
      className={cx(style.wapper)}
      onClick={onClick}
      style={{ width: "100%" }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    >
      <Menu.SubMenu
        className={cx([style.submenu, "item-lecture"])}
        title="12341324"
      >
        <Menu.Item
          className={cx([style.item, "item-lecture"])}
          key="1"
          icon={<img alt="" src={check} />}
        >
          Item 1123412341234{" "}
        </Menu.Item>
        <Menu.Item
          className={cx([style.item, "item-lecture"])}
          key="2"
          icon={<img alt="" src={check} />}
        >
          Item 1123412341234{" "}
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
}
