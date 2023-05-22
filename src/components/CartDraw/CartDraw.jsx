import { Drawer } from "antd";
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import style from "./style.module.scss";
import Item from "./Item";
import { selectCart, setStatus, updateCarts } from "../../redux/cartSlice";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(style);

export default function CartDraw() {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const navigate = useNavigate();

  const onClose = () => {
    dispatch(setStatus(false));
  };
  useEffect(() => {
    dispatch(updateCarts());
  }, []);
  const total = useMemo(() => {
    return cart.items.reduce((pre, item) => {
      return item.course.price + pre;
    }, 0);
  }, [cart]);
  return (
    <div>
      <Drawer
        title="Giò hàng của bạn"
        placement="right"
        onClose={onClose}
        open={cart.status}
        closable={false}
        width={500}
      >
        {cart?.items.map((item, index) => (
          <Item key={index} item={item} />
        ))}
        
        <Button
          onClick={() => {
            navigate("/cart");
          }}
          styles={{ width: "100%", margin: "0px", height: "45px" }}
          colorText={"white"}
          backgrourdColor={"var(--main-color)"}
        >
          Thanh Toán
        </Button>
      </Drawer>
    </div>
  );
}
