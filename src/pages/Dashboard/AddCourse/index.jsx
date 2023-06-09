import { PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Select, Space, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { categoryService } from "../../../service/categoryService";
import courseService from "../../../service/courseService";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;
const { Option } = Select;

export default function AddCourse() {
  const [file, setFile] = useState();
  const [subcategory, setSubcategory] = useState([]);
  const navigate = useNavigate();
  const normFile = (e) => {
    if (e.fileList.length > 0) {
      setFile(e.fileList[0].originFileObj);
    }
  };

  useEffect(() => {
    const fun = async () => {
      const supCategory = await categoryService.getAllSubCategory();
      setSubcategory(supCategory);
    };
    fun();
  }, []);

  return (
    <>
      <Form
        onFinish={(values) => {
          values["file"] = file;
          courseService.create(values).then((data) => {
            if (data.id) {
              navigate("/dashboard/coursies/" + data.id);
            }
          });
        }}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        style={{ maxWidth: "100%" }}
      >
        <Form.Item label="Title" name={"title"}>
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item name={"description"} label="Description">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item name={"price"} label="Price">
          <InputNumber defaultValue={0} style={{ width: 200 }} />
        </Form.Item>

        <Form.Item name={"subCategoryId"} label="Category">
          <Select
            className="select-categories mt-"
            mode="multiple"
            style={{}}
            placeholder="Select category"
            optionLabelProp="label"
          >
            {subcategory?.map((sub) => (
              <Option key={sub.id} value={sub.id} label={sub.name}>
                <Space>{sub.name}</Space>
              </Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          label="Upload"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload listType="picture-card" maxCount={1} onChange={normFile}>
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
      </Form>
    </>
  );
}
