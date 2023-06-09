import React, { useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import style from "./sty;e.module.scss";
import classNames from "classnames";
import video_logo from "./video.svg";
import { Button, Modal } from "antd";
import ReactPlayer from "react-player";
const cx = classNames.bind(style);
export default function ItemCart({ item ,index}) {
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
  return (
    <div className={cx([style.wrapper])}>
      <img
        onClick={() => {
          showModal();
        }}
        src={video_logo}
        alt=""
        height={"80%"}
        color="#313131"
      />
      {isModalOpen && (
        <Modal
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          width={900}
        >
          <ReactPlayer
            controls={true}
            width={"100%"}
            url={item?.lecture?.video}
          />
        </Modal>
      )}

      <div className={cx([style.detail])}>
        <h4>Bài {index+1}: {item.title}</h4>
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
