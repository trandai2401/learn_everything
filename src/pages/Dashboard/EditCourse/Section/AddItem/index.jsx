import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  CheckCircleOutlined,
  AndroidOutlined,
  AppleOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, Tabs, Upload } from "antd";
import lesson from "../../../../../service/item";
const { TextArea } = Input;

export default function AddItem({ sectionId, reFresh }) {
  const [createing, setCreating] = useState(false);

  return (
    <>
      {!createing && (
        <Button
          onClick={() => {
            setCreating(!createing);
          }}
          type="primary"
          ghost
        >
          Thêm bài học
        </Button>
      )}
      {/* AppleOutlined, AndroidOutlined */}

      {createing && (
        <>
          {" "}
          <h4>Tạo bài học mới</h4>{" "}
          <Tabs
            defaultActiveKey="2"
            items={[
              { title: "Video", icon: VideoCameraOutlined, component: Video },
              {
                title: "Kiểm tra",
                icon: CheckCircleOutlined,
                component: Test,
              },
            ].map((tab, i) => {
              return {
                label: (
                  <span>
                    {<tab.icon />}
                    {tab.title}
                  </span>
                ),
                key: i,
                children: <tab.component />,
              };
            })}
          />
        </>
      )}
    </>
  );

  function Video() {
    const [file, setFile] = useState();
    const normFile = (e) => {
      if (e.fileList.length > 0) {
        setFile(e.fileList[0].originFileObj);
      }
    };
    return (
      <>
        <Form
          onFinish={(values) => {
            values.file = file;
            lesson
              .create({
                ...values,
                time: 2,
                itemTypeId: 1,
                sectionId: sectionId,
              })
              .then(() => {
                reFresh();
                setCreating(false);
              });
          }}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: "100%" }}
        >
          <Form.Item label="Title" name={"title"}>
            <TextArea rows={2} />
          </Form.Item>
          <Form.Item label="Description" name={"description"}>
            <TextArea rows={2} />
          </Form.Item>
          <Form.Item
            label="Upload"
            valuePropName="fileList"
            getValueFromEvent={normFile}
          >
            <Upload
              accept="video/*"
              listType="picture-card"
              maxCount={1}
              onChange={normFile}
            >
              <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </div>
            </Upload>
          </Form.Item>
          <Button
            style={{ marginLeft: "165px" }}
            type="primary"
            htmlType="submit"
          >
            Lưu
          </Button>

          <Button
            style={{ marginLeft: "165px" }}
            type="primary"
            danger
            onClick={() => {
              setCreating(!createing);
            }}
          >
            Hủy
          </Button>
        </Form>
      </>
    );
  }

  function Test() {
    const [file, setFile] = useState();
    const normFile = (e) => {
      if (e.fileList.length > 0) {
        setFile(e.fileList[0].originFileObj);
      }
    };
    return (
      <>
        {" "}
        <>
          <Form
            onFinish={(values) => {
              values.file = file;
              lesson
                .create({
                  ...values,
                  time: 2,
                  itemTypeId: 2,
                  sectionId: sectionId,
                })
                .then(() => {
                  reFresh();
                  setCreating(false);
                });
            }}
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
            style={{ maxWidth: "100%" }}
          >
            <Form.Item label="Title" name={"title"}>
              <TextArea rows={2} />
            </Form.Item>
            <Form.Item label="Description" name={"description"}>
              <TextArea rows={2} />
            </Form.Item>
            <Form.Item
              label="Tải file bài kiểm tra"
              valuePropName="fileList"
              getValueFromEvent={normFile}
            >
              <Upload
                accept="json/*"
                listType="text"
                maxCount={1}
                onChange={normFile}
              >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Button
              style={{ marginLeft: "165px" }}
              type="primary"
              htmlType="submit"
            >
              Lưu
            </Button>

            <Button
              style={{ marginLeft: "165px" }}
              type="primary"
              danger
              onClick={() => {
                setCreating(!createing);
              }}
            >
              Hủy
            </Button>
          </Form>
        </>
      </>
    );
  }
}
