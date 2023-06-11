import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Comment } from "@ant-design/compatible";

import { Avatar, Button, Form, Input, List, Pagination, Tooltip } from "antd";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/authSlice";
import courseService from "../../service/courseService";
import { io } from "socket.io-client";
import { calculateTimeDifference } from "../../unitls";
const { TextArea } = Input;

const data = [
  {
    author: "Han Solo",
    avatar: "https://avatars.githubusercontent.com/u/97165289",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title="2016-11-22 11:22:33">
        <span>8 hours ago</span>
      </Tooltip>
    ),
  },
  {
    author: "Han Solo",
    avatar: "https://avatars.githubusercontent.com/u/97165289",
    content: (
      <p>
        We supply a series of design principles, practical patterns and high
        quality design resources (Sketch and Axure), to help people create their
        product prototypes beautifully and efficiently.
      </p>
    ),
    datetime: (
      <Tooltip title="2016-11-22 10:22:33">
        <span>9 hours ago</span>
      </Tooltip>
    ),
  },
];

const Editor = ({ comment }) => (
  <>
    <Form
      onFinish={(value) => {
        comment(value.content);
      }}
    >
      <Form.Item name={"content"}>
        <TextArea rows={3} />
      </Form.Item>
      <Form.Item>
        <Button
          border
          styles={{ width: "128px" }}
          htmlType="submit"
          type="primary"
        >
          Add Comment
        </Button>
      </Form.Item>
    </Form>
  </>
);
export default function Comments({ courseId }) {
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const user = useSelector(selectAuth);
  const [client, setClient] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState(null);
  const comment = useCallback(
    (content) => {
      client.emit("comment", { content: content, courseId: courseId });
    },
    [client]
  );

  useEffect(() => {
    if (newComment) {
      setComments([newComment, ...comments]);
    }
  }, [newComment]);

  useEffect(() => {
    const funct = async () => {
      const comment = await courseService.getAllComment(courseId);
      setComments(comment);
    };

    funct();
    const jwt = localStorage.getItem("access_token");

    const socket = io("http://localhost:8000", {
      extraHeaders: {
        Authorization: "Bearer " + jwt,
      },
    });
    socket.on("connect", function () {
      console.log("Connected");
    });
    setClient(socket);
    socket.on("course:" + courseId, (data) => {
      setNewComment(data);
      // console.log(data);
    });
    // socket.on("events", function (data) {
    //   console.log("event", data);
    // });
    socket.on("exception", function (data) {
      console.log("event", data);
    });
    socket.on("disconnect", function () {
      console.log("Disconnected");
    });

    return () => {
      socket.close();
    };
  }, []);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const data = useMemo(() => {
    return comments.map((comment) => {
      return {
        author: comment.account.fullName,
        avatar:
          comment.account?.avatar?.thumbUrl ||
          "https://avatars.githubusercontent.com/u/97165289",
        content: <p>{comment.content}</p>,
        datetime: (
          <Tooltip title={comment.time}>
            <span>{calculateTimeDifference(comment.time)} trước</span>
          </Tooltip>
        ),
      };
    });
  }, [comments]);
  return (
    <>
      {" "}
      <Comment
        avatar={
          <Avatar
            src={
              user?.avatar?.thumbUrl ||
              "https://avatars.githubusercontent.com/u/97165289"
            }
            alt="Han Solo"
          />
        }
        content={<Editor comment={comment} />}
      />
      <List
        className="comment-list"
        header={`${data.length} replies`}
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <li>
            <Comment
              actions={item.actions}
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
      <Pagination defaultCurrent={6} total={500} />
    </>
  );
}
