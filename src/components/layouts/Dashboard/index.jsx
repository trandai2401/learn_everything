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
import { signOut } from "../../../redux/authSlice";
import { useDispatch } from "react-redux";
import { SmileOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const Dasfboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  useEffect(() => {}, []);
  const items = useMemo(
    () => [
      {
        key: "1",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.antgroup.com"
          >
            1st menu item
          </a>
        ),
      },
      {
        key: "2",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.aliyun.com"
          >
            2nd menu item (disabled)
          </a>
        ),
        icon: <SmileOutlined />,
        disabled: true,
      },
      {
        key: "3",
        label: (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.luohanacademy.com"
          >
            3rd menu item (disabled)
          </a>
        ),
        disabled: true,
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
              key: "2",
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
              style={{ marginRight: "25px" }}
              src="https://i.ytimg.com/vi/xXmXM0qRMbo/maxresdefault.jpg"
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
