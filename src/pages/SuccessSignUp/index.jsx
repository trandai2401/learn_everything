import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SuccessSignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  });
  return (
    <div
      style={{
        display: "flex",
        height: 500,
        alignItems: "center",
        justifyContent: "space-around",
        color: "#f2184f",
      }}
    >
      <h1>Vui lòng check mail để nhận mật khẩu</h1>
    </div>
  );
}
