import React from "react";
import Button from "../../components/Button/Button";
import style from "./cartSocail.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import google_icon from './google.svg'

export default function CartSocial() {
  return (
    <div
      style={{
        width: "100%",
        height: "38px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginBottom : "10px"
      }}
    >
      <Link
        to={"/social"}
        style={{
          border: "1px solid var(--text-color-4)",
          width: "100%",
          height: "38px",
          borderRadius: "50px",
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        <img src={google_icon} alt="" style={{position: "absolute", left: "20px"}} />
        <span style={{ fontSize: "12px", fontWeight: "600", color:"var(--text-color-3)" }}>CartSocial</span>
      </Link>
    </div>
  );
}
