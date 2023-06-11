import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import bg from "./bg-login.jpg";
import icon from "./icon.svg";
import { Checkbox, Form, Input } from "antd";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import CartSocial from "./CartSocial";
import appleIcon from "./apple-logo.png";
import facebookIcon from "./facebook (2).png";
import { authService } from "../../service/auth";
import { notification, Space } from "antd";

const cx = classNames.bind(style);

export default function SignUp() {
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: "#575757",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPositionY: "-500px",
        backgroundBlendMode: "multiply",
      }}
      className={cx(style.container)}
    >
      <div className={cx(style["text_wrapper"])}>
        <div>
          <span className={cx(style.name)} style={{ display: "block" }}>
            Learn
          </span>
          <span className={cx(style.name)}>Everything</span>
        </div>
        <span className={cx(style.description)}>
          <span className="main_text">Posuere</span> lorem ipsum dolor sit amet
          consectetur adipiscing. Et tortor at risus viverra adipiscing at.
          Rhoncus urna neque viverra justo nec
        </span>
        <div className={cx(style.list_benefits)}>
          <div className={style["grid_item"]}>
            <div className={style.left}>
              <span>
                <img src={icon} alt="" />
              </span>
            </div>
            <div className={style.right}>
              <span>
                <span className="main_text">Lacus</span> sed viverra tellus in
                hac. Purus ut faucibus pulvinar elementum integer enim neque
                volutpat
              </span>
            </div>
          </div>
          <div className={style["grid_item"]}>
            <div className={style.left}>
              <span>
                <img src={icon} alt="" />
              </span>
            </div>
            <div className={style.right}>
              <span>
                Lacus sed viverra tellus in hac.{" "}
                <span className="main_text">Purus</span> ut faucibus pulvinar
                elementum integer enim neque volutpat
              </span>
            </div>
          </div>
          <div className={style["grid_item"]}>
            <div className={style.left}>
              <span>
                <img src={icon} alt="" />
              </span>
            </div>
            <div className={style.right}>
              <span>
                Lacus sed viverra tellus in hac. Purus ut faucibus pulvinar
                elementum integer enim neque volutpat
              </span>
            </div>
          </div>
          <div className={style["grid_item"]}>
            <div className={style.left}>
              <span>
                <img src={icon} alt="" />
              </span>
            </div>
            <div className={style.right}>
              <span>
                Lacus sed viverra tellus in hac. Purus ut faucibus pulvinar
                elementum integer enim neque volutpat
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className={cx(style["login_wrapper"])}>
        <h3>Create account</h3>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          style={{ maxWidth: 600 }}
          onFinish={(values) => {
            console.log(values);
            authService
              .signUp({
                ...values,
              })
              .then(() => {
                navigate("/success_sign_up");
              });

            //   .then(() => {

            // });
          }}
          onFinishFailed={(values) => {}}
          autoComplete="off"
        >
          <Form.Item
            style={{ marginBottom: "20px" }}
            name="fullName"
            rules={[{ required: true, message: "Please input your fullName!" }]}
          >
            <Input required placeholder="Your name" className={style.input} />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: "20px" }}
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" className={style.input} />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: "20px" }}
            name="phone"
            rules={[{ required: true, message: "Please input your phone!" }]}
          >
            <Input placeholder="Your phone" className={style.input} />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            style={{ marginBottom: "20px" }}
          >
            <Checkbox>I agree to the terms. Read the terms now</Checkbox>
          </Form.Item>

          <Form.Item style={{ marginBottom: "20px" }}>
            <Button
              backgrourdColor={"var(--main-color)"}
              type="primary"
              border
              colorText={"white"}
              fontSize={"14px"}
              htmlType="submit"
              styles={{ height: "38px", width: "100%", margin: "0px" }}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
        <div className={style.login_or_sign_up_with}>
          <span style={{ color: "var(--text-color-3)" }}>
            Already have an <strong>account</strong>?{" "}
            <Link to="/sign_in">
              <span className="main_text strong_text under_line">
                Sign in now
              </span>
            </Link>
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "var(--text-color-3)",
              fontWeight: "700",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            Or with
          </span>
          <div
            style={{ width: "100%", display: "flex", flexDirection: "column" }}
          >
            <CartSocial />
            <CartSocial icon={facebookIcon} title="Facebook" />
            <CartSocial icon={appleIcon} title="Apple" />
          </div>
        </div>
      </div>
    </div>
  );
}
