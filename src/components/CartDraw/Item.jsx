import React, { useContext } from "react";
import style from "./style-cart.module.scss";
import classNames from "classnames";
import { DeleteOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { deleteCart } from "../../redux/cartSlice";
import formatNumber from "../../unitls";


const cx = classNames.bind(style);
export default function Item({ item }) {
  const dispatch = useDispatch();
  // const { api } = useContext(NotificationContext);

  return (
    <div className={cx(style.wrapper)}>
      <div style={{ width: "150px" }}>
        {" "}
        <img
          width="100%"
          style={{ objectFit: "cover" }}
          src={item?.course.image.thumbUrl}
          alt=""
        />
      </div>
      <div className={cx(style.textDescription)}>
        <h4>{item.course.title}</h4>
        <h6 className={cx()}>{item.course.created_by.fullName}</h6>
        <h5>{formatNumber(item.course.price)} vnđ</h5>
      </div>
      <DeleteOutlined
        onClick={() => {
          dispatch(deleteCart(item.courseId));
          // api.open({
          //   message: "Thông báo",
          //   description: `Đã xóa khóa học "${item.course.title}" ra khỏi giỏ hàng`,
          //   placement: "top",
          // });
        }}
        style={{ fontSize: "24px", color: "#ea4c89" }}
      />
    </div>
  );
}
