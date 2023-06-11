import React from "react";
import {
  LikeOutlined,
  VideoCameraOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { Statistic } from "antd";
import style from "./style.module.scss";
import classNames from "classnames";
import LineChart from "./LineChart";

const cx = classNames.bind(style);

export default function Statistical() {
  return (
    <div>
      <div className={cx([style.statistic])}>
        <Statistic
          title="Tổng tiền"
          value={1128}
          prefix={<MoneyCollectOutlined />}
        />
        <Statistic
          title="Khóa học"
          value={1128}
          prefix={<VideoCameraOutlined />}
        />
        <Statistic
          title="Lượt đăng ký"
          value={1128}
          prefix={<LikeOutlined />}
        />
      </div>

      <div class={cx([style["grid-container"]])}>
        <div class={cx([style["grid-item"]])}>
          {/* <LineChart /> */}
        </div>
        <div class={cx([style["grid-item"]])}>Item 2</div>
        <div class={cx([style["grid-item"]])}>Item 3</div>
        <div class={cx([style["grid-item"]])}>Item 4</div>
      </div>
    </div>
  );
}
