import React, { useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Select, Space, Upload } from "antd";
import sectionService from "../../../../service/section";

const { TextArea } = Input;
const { Option } = Select;
export default function AddSection({ courseId, reFresh }) {
  const [createing, setCreating] = useState(false);
  return (
    <>
      {" "}
      {!createing && (
        <Button
          onClick={() => {
            setCreating(!createing);
          }}
          type="primary"
        >
          Thêm chương mới
        </Button>
      )}
      {createing && (
        <Form
          onFinish={(values) => {
            values.courseId = courseId;
            sectionService.create(values).then(() => {
              reFresh();
              setCreating(false);
            });
          }}
          title="Tạo section mới"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          style={{ maxWidth: "100%" }}
        >
          <h3>Tạo chương mới</h3>
          <Form.Item label="Title" name={"title"}>
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item name={"description"} label="Description">
            <TextArea rows={4} />
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
      )}
    </>
  );
}
