import React from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import bg from "./bg-login.jpg";
import icon from "./icon.svg";
import { Checkbox, Form, Input } from "antd";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import CartSocial from "./CartSocial";
const cx = classNames.bind(style);

export default function Login() {
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
          // initialValues={{ remember: true }}
          onFinish={() => {}}
          onFinishFailed={() => {}}
          autoComplete="off"
        >
          <Form.Item
            style={{ marginBottom: "20px" }}
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input required placeholder="Your name" className={style.input} />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: "20px" }}
            name="phone"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Your name" className={style.input} />
          </Form.Item>

          <Form.Item
            style={{ marginBottom: "20px" }}
            name="number"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Your name" className={style.input} />
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
          <div style={{width: "100%", display: "flex"}}>
          <CartSocial/>
          <CartSocial/>
          <CartSocial/>
          </div>
        </div>
      </div>
    </div>
  );
}
