import React, { useMemo, useRef } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cartSlice";
import style from "./style.module.scss";
import classNames from "classnames";
import Button from "../../components/Button/Button";
import ItemCart from "./cart";
import formatNumber from "../../unitls";
import { selectAuth } from "../../redux/authSlice";

const cx = classNames.bind(style);

export default function Cart() {
  const cart = useSelector(selectCart);
  const auth = useSelector(selectAuth);
  const form = useRef();
  const total = useMemo(() => {
    return cart.items.reduce((pre, cur) => pre + cur.course.price, 0);
  }, [cart]);
  return (
    <div style={{ marginLeft: "45px", marginRight: "45px" }}>
      <h1>Shopping Cart</h1>
      <div className={cx(style.wrapper)} style={{ display: "flex" }}>
        <div className={cx([style.left])}>
          <span className={cx([style.numberOfCourse])}>8 Courses in Cart</span>
          <div className={cx([style.list_cart])}>
            {cart.items.map((cart) => (
              <ItemCart
                key={cart.courseId}
                idCart={cart.courseId}
                course={cart.course}
              />
            ))}
          </div>
        </div>
        <div className={cx([style.right])}>
          <span className={cx([style.title])}>Tổng</span>
          <span className={cx([style.total])}>
            <span className={cx([style.unit])}>₫</span>
            {formatNumber(total)}
          </span>
          <Button
            onClick={() => {
              form.current.submit();
            }}
            style={{ display: "block" }}
          >
            Thanh toán
          </Button>
        </div>
      </div>
      <form
        ref={form}
        hidden
        action="http://localhost:8000/payment"
        method="post"
      >
        <input type="text" value={total} name="amount" />
        <input type="text" value={"VNBANK"} name="bankCode" />
        <input type="text" value={"vn"} name="language" />
        <input type="text" hidden value={auth?.user?.sub} name="userId" />
        <button type="submit">Thanh toan</button>
      </form>
    </div>
  );
}
