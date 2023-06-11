import React, { useEffect, useMemo, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  VideoCameraAddOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme, Dropdown, Avatar } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { selectAuth, signOut } from "../../../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { SmileOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const Dasfboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { user } = useSelector(selectAuth);

  const items = useMemo(
    () => [
      {
        key: "1",
        label: <Link to={"/"}>Về trang chủ</Link>,
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
  const onClick = (e) => {
    navigate("/dashboard/" + e.key);
  };
  return (
    <Layout style={{ background: colorBgContainer }}>
      <Sider
        trigger={null}
        collapsible
        width={300}
        collapsed={collapsed}
        style={{ background: colorBgContainer }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          onClick={onClick}
          mode="inline"
          defaultSelectedKeys={["1"]}
          className="menu-dashboard"
          items={[
            {
              icon: <VideoCameraAddOutlined />,
              label: "Khóa học",
              children: [
                {
                  key: "coursies",
                  label: "Danh sách khóa học",
                },
                {
                  key: "addCourse",
                  label: "Thêm khóa học",
                },
              ],
            },
            {
              key: "statistical",
              icon: <VideoCameraOutlined />,
              label: "Thống kê",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "Thiết lập",
            },
          ]}
        />
      </Sider>
      <Layout style={{ minHeight: "100vh" }}>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <Dropdown menu={{ items }}>
            <Avatar
              style={{ marginRight: "30px" }}
              src={
                user?.avatar.thumbUrl ||
                "https://i.ytimg.com/vi/xXmXM0qRMbo/maxresdefault.jpg"
              }
              size={"large"}
            />
          </Dropdown>
        </Header>
        <Content
          style={{
            overflow: "unset",
            margin: "24px 16px",
            padding: 24,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dasfboard;
