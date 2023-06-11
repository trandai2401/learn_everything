import React, { useState } from "react";
import { Form, Radio, Button, Space, Table } from "antd";
import { learnedService } from "../../../service/learnedService";
import lesson from "../../../service/item";

const columns = [
  {
    title: "Câu hỏi",
    dataIndex: "question",
    key: "question",
  },
  {
    title: "A",
    dataIndex: "a",
    key: "a",
  },
  {
    title: "B",
    dataIndex: "b",
    key: "b",
  },
  {
    title: "C",
    dataIndex: "c",
    key: "c",
  },
  {
    title: "D",
    dataIndex: "d",
    key: "d",
  },
  {
    title: "Đáp án đúng",
    dataIndex: "correctAnswer",
    key: "correctAnswer",
  },
  {
    title: "Đáp án bạn chọn",
    dataIndex: "selected",
    key: "selected",
  },
  {
    title: "Kết quả",
    dataIndex: "result",
    key: "result",
  },
];
export default function Test({ item }) {
  const [checked, setChecked] = useState(false);
  const [result, setResult] = useState([]);
  const [point, setPoint] = useState([0, 0]);
  console.log(item);
  return (
    <div style={{ width: "100%", padding: "20px", paddingLeft: "80px" }}>
      {!checked && (
        <Form
          layout="vertical"
          onFinish={(values) => {
            console.log({ ...values, itemId: item.id });
            lesson.checkTest({ ...values, itemId: item.id }).then((data) => {
              setPoint([data.point, data.contestantSAnswers.length]);
              const dataforTable = data.contestantSAnswers.map((q) => {
                console.log(q.question);
                return {
                  ...q.question,
                  selected: q.answer || "Không chọn",
                  result:
                    q.answer === q.question.correctAnswer ? "Đúng" : "Sai",
                };
              });
              setResult(dataforTable);
              setChecked(true);
            });
          }}
        >
          {item.questions.map((q, index) => (
            <Form.Item
              name={q.id}
              label={
                <h4>
                  Câu {index + 1}: {q.question}
                </h4>
              }
              initialValue={null}
            >
              <Radio.Group>
                <Space direction="vertical">
                  <Radio value={"a"}>{q["a"]}</Radio>
                  <Radio value={"b"}>{q["b"]}</Radio>
                  <Radio value={"c"}>{q["c"]}</Radio>
                  <Radio value={"d"}>{q["d"]}</Radio>
                </Space>
              </Radio.Group>
            </Form.Item>
          ))}

          <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
            <Space>
              <Button
                type="primary"
                htmlType="submit"
                onClick={async () => {
                  await learnedService.create(item.id);
                }}
              >
                Nộp bài
              </Button>
            </Space>
          </Form.Item>
        </Form>
      )}
      {checked && (
        <>
          <h4>kết quả của bạn là: {`${point[0]}/${point[1]}`} </h4>
          <Table columns={columns} dataSource={result} />
        </>
      )}
    </div>
  );
}
