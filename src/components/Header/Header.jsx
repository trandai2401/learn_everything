import classNames from "classnames";
import React, { useMemo } from "react";

import logo from "./logo.svg";
import logo_category from "./logo-category.svg";
import cart from "./cart.svg";
import cartHover from "./cart-hover.svg";

import style from "./style.module.scss";
import Search from "./Search";
import Button from "../Button/Button";
import BottonIcon from "../Button/BottonIcon";
import { Link } from "react-router-dom";
import { Avatar, Dropdown } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth, signOut } from "../../redux/authSlice";
import { setStatus } from "../../redux/cartSlice";
import CartDraw from "../CartDraw/CartDraw";

const cx = classNames.bind(style);

export default function Header() {
  const dispatch = useDispatch();
  const { user } = useSelector(selectAuth);
  const items = useMemo(
    () => [
      {
        key: "1",
        label: <Link to={"/dashboard/"}>Dạy học</Link>,
      },
      {
        key: "2",
        label: <Link to={"/dashboard/"}>Cá nhân</Link>,
      },
      {
        key: "4",
        danger: true,
        label: (
          <Link
            onClick={() => {
              dispatch(signOut());
            }}
            to={"/login"}
          >
            Đăng xuất
          </Link>
        ),
      },
    ],
    []
  );

  return (
    <>
      {" "}
      <div className={cx(style.wrapper)}>
        <div className={cx(style.left)}>
          <Link to={""}>
            <img className={cx(style.logo)} src={logo} alt="" />
          </Link>
          <div className={cx(style.category_wrapper)}>
            <img src={logo_category} alt="" />
            <span>Danh mục</span>
          </div>
        </div>
        <div className={cx(style.center)}>
          <Search />
        </div>
        <div className={cx(style.right)}>
          <BottonIcon
            onClick={() => {
              dispatch(setStatus(true));
            }}
            icon={cart}
            iconHover={cartHover}
          />
          {user ? (
            <>
              {" "}
              <Link
                to="/course-management"
                className={cx(style.category_wrapper)}
              >
                <span>My Course</span>
              </Link>{" "}
              <Dropdown menu={{ items }}>
                <Avatar
                  src={
                    user?.avatar?.thumbUrl ||
                    "https://i.ytimg.com/vi/xXmXM0qRMbo/maxresdefault.jpg"
                  }
                  size={"large"}
                />
              </Dropdown>
            </>
          ) : (
            <>
              <Button>
                <Link
                  to={"./login"}
                  style={{ textDecoration: "none", color: "var(--primary)" }}
                >
                  Đăng nhập
                </Link>
              </Button>
              <Button border={true}>
                <Link to={"./sign_up"} style={{ textDecoration: "none" }}>
                  Đăng ký
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
      <CartDraw />
    </>
  );
}
