import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cartSlice";

export default function Cart() {
  const cart = useSelector(selectCart);
  const total = useMemo(() => {
    return cart.items.reduce((pre, cur) => pre + cur.course.price, 0);
  }, [cart]);
  return (
    <div style={{ marginLeft: "35px", marginRight: "35px" }}>
      <h1>Shopping Cart</h1>
      <form action="http://localhost:8000/payment" method="post">
        <input type="text" value={total} name="amount" />
        <input type="text" value={"VNBANK"} name="bankCode" />
        <input type="text" value={"vn"} name="language" />
        <button type="submit">Thanh toan</button>
      </form>
    </div>
  );
}
