import React, { useMemo, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import style from "./sty;e.module.scss";
import classNames from "classnames";
import video_logo from "./video.svg";
import test_logo from "./test.svg";
import { Button, Modal, Table } from "antd";
import ReactPlayer from "react-player";
const cx = classNames.bind(style);

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
    title: "Answer",
    dataIndex: "correctAnswer",
    key: "correctAnswer",
  },
];
export default function ItemCart({ item, index }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const rederType = useMemo(() => {
    if (item.typeItem.id == 1)
      return (
        <img
          onClick={() => {
            showModal();
          }}
          src={video_logo}
          alt=""
          height={"80%"}
          color="#313131"
        />
      );

    if (item.typeItem.id == 2)
      return (
        <img
          onClick={() => {
            showModal();
          }}
          src={test_logo}
          alt=""
          height={"80%"}
          color="#313131"
        />
      );
  });
  return (
    <div className={cx([style.wrapper])}>
      {rederType}
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={900}
        >
          {item.typeItem.id == 1 && (
            <ReactPlayer
              controls={true}
              width={"100%"}
              url={item?.lecture?.video}
            />
          )}
          {item.typeItem.id == 2 && (
            <Table columns={columns} dataSource={item.questions} />
          )}
        </Modal>
      )}

      <div className={cx([style.detail])}>
        <h4>
          Bài {index + 1}: {item.title}
        </h4>
        <h5>Nội dung: {item.description}</h5>
      </div>

      <div className={cx([style.action])}>
        <Button danger type="primary">
          <DeleteOutlined />
        </Button>
        <Button type="primary" ghost>
          <EditOutlined />
        </Button>
      </div>
    </div>
  );
}
