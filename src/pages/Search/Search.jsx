import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { Button, Checkbox, Form, Select, Slider } from "antd";
import CourseResult from "./CourseResult";
import { useLocation, useNavigate } from "react-router-dom";
import formatNumber from "../../unitls";
import courseService from "../../service/courseService";
import { categoryService } from "../../service/categoryService";

const { Option } = Select;

const cx = classNames.bind(style);
export default function Search() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const keyword = queryParams.get("keyword");
  const [startEnd, setStartEnd] = useState([200000, 500000]);
  const [categories, setCategories] = useState([]);
  const [courseResult, setCourseResult] = useState([]);

  useEffect(() => {
    const fun = async () => {
      const categories = await categoryService.getAllSubCategory();
      setCategories(categories);
    };
    fun();
  }, []);

  useEffect(() => {
    const fun = async () => {
      const objectJsonValue = Object.fromEntries(queryParams.entries());
      if (objectJsonValue.keyword)
        objectJsonValue.keyword = `"${objectJsonValue.keyword}"`;

      const courseResult = await courseService.search(
        Object.keys(objectJsonValue).reduce((pre, current) => {
          return { [current]: JSON.parse(objectJsonValue[current]), ...pre };
        }, {})
      );
      console.log(courseResult);
      setCourseResult(courseResult);
    };
    fun();
  }, [queryParams.toString()]);
  return (
    <div className={cx([style.wrapper])}>
      <h2>Có {courseResult.length} kết quả</h2>
      <div className={cx([style["filter_result"]])}>
        <Form
          onFinish={async (values) => {
            const searchParams = new URLSearchParams(location.search);
            searchParams.set("keyword", keyword);
            Object.keys(values).forEach((key) => {
              if (values[key])
                searchParams.set(key, JSON.stringify(values[key]));
            });
            // navigate(searchParams.toString());
            // const courseResult = await courseService.search({
            //   keyword,
            //   ...values,
            // });
            navigate("/search?" + searchParams.toString());
          }}
        >
          {" "}
          <div className={cx(style.filters)}>
            <Form.Item name={"order_by"} label="Sắp xếp">
              <Select
                style={{ width: 180, marginLeft: "10px" }}
                placeholder="Sắp xếp"
                // options={[
                //   { value: "PRICE_ASC", label: "Giá tăng dần" },
                //   { value: "PRICE_DESC", label: "Giá giảm dần" },
                // ]}
              >
                <Option value="PRICE_ASC">Giá tăng dần</Option>
                <Option value="PRICE_DESC">Giá giảm dần</Option>
              </Select>
            </Form.Item>
            <Form.Item name="price" label="Giá" initialValue={startEnd}>
              <Slider
                range
                // defaultValue={startEnd}
                min={0}
                max={1000000}
                onChange={(e) => {
                  setStartEnd(e);
                }}
              />
            </Form.Item>
            <h4>
              Từ {formatNumber(startEnd[0])}đ đến {formatNumber(startEnd[1])}đ
            </h4>
            <Form.Item>
              <Button htmlType="submit">Tìm kiếm</Button>
            </Form.Item>
            {/* <Button tmlType="submit">Tìm kiếm</Button> */}
            <h3>Danh mục</h3>
            <Form.Item name="category">
              <Checkbox.Group>
                {categories?.map((cate, index) => (
                  <Checkbox
                    key={index}
                    value={cate.id}
                    className={cx([style.checkbox])}
                  >
                    {cate.name}
                  </Checkbox>
                ))}
                {/* <Checkbox value={1} className={cx([style.checkbox])}>
                  Lập trình mobile
                </Checkbox> */}
              </Checkbox.Group>
            </Form.Item>

            <br />
          </div>
        </Form>

        <div className={cx([style.coursies])}>
          {courseResult?.map((course, index) => (
            <CourseResult key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
}
