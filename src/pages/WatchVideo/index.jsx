import React, { useEffect, useMemo, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import ReactPlayer from "react-player";
import { List, Tabs, Tooltip } from "antd";
import ListCourse from "./ListCourse";
import "./style.css";
import { useParams } from "react-router-dom";
import courseService from "../../service/courseService";
import Comments from "./Comments";
import General from "./General/General";
import { learnedService } from "../../service/learnedService";
import Test from "./Test/Test";
const cx = classNames.bind(style);

const data = [
  {
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: "Han Solo",
    avatar: "https://joeschmoe.io/api/v1/random",
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
    actions: [<span key="comment-list-reply-to-0">Reply to</span>],
    author: "Han Solo",
    avatar: "https://joeschmoe.io/api/v1/random",
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
// const items = [
//   {
//     key: "1",
//     label: `Tổng quan`,
//     children: `What is Lorem Ipsum?
//     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

//  `,
//   },
//   {
//     key: "2",
//     label: `Trao đổi`,
//     children: <Comments />,
//   },
//   {
//     key: "3",
//     label: `Đánh giá`,
//     children: `Content of Tab Pane 3`,
//   },
// ];
export default function WatchVideo() {
  const { idLecture } = useParams();
  const [course, setCourse] = useState();
  const [lectureSelected, setLectureSelected] = useState();
  const [progress, setProgress] = useState(false);
  const [fresh, setFresh] = useState(false);
  const [typeSelected, setTypeSelected] = useState();
  const refresh = useMemo(
    () => () => {
      setFresh(!fresh);
    },
    []
  );
  useEffect(() => {
    const func = async () => {
      const course = await courseService.getCourseToLearn(idLecture);
      setCourse(course);
    };
    func();
  }, [fresh]);

  const itemTabs = useMemo(() => {
    return [
      {
        key: "1",
        label: `Tổng quan`,
        children: <General course={course} />,
      },
      {
        key: "2",
        label: `Trao đổi`,
        children: <Comments courseId={idLecture} />,
      },
      {
        key: "3",
        label: `Đánh giá`,
        children: `Content of Tab Pane 3`,
      },
    ];
  }, [course, idLecture]);
  const lecture = useMemo(() => {
    const items = course?.course.sections
      .sort((a, b) => a.id - b.id)
      .reduce((pre, section) => {
        const items = section?.items.reduce((pre, item) => {
          const key = `lec-${item.id}`;
          return { ...pre, [key]: item };
        }, {});

        return { ...pre, ...items };
      }, {});

    return items;
  }, [course]);
  return (
    <>
      {course && (
        <div className={cx(style["wrapper"])}>
          <div className={cx(style.video)}>
            {lecture?.[lectureSelected]?.typeItem.id == 2 && (
              <Test item={lecture?.[lectureSelected]}  />
            )}
            {lecture?.[lectureSelected]?.typeItem.id == 1 && (
              <ReactPlayer
                onProgress={async (pro) => {
                  const { played } = pro;
                  console.log(!progress);
                  if (played >= 0.85 && !progress) {
                    // Thực hiện hành động tại đây khi video đạt đến 85% thời gian
                    console.log("Đã đạt đến 85% thời gian của video");
                    await learnedService.create(+lectureSelected.substring(4));
                    refresh();

                    setProgress(true);
                    // Gọi hàm hoặc thực hiện hành động mong muốn
                  }
                }}
                controls
                width={"100%"}
                height={"500px"}
                url={
                  lecture?.[lectureSelected]?.lecture?.video ||
                  course?.course?.sections[0]?.items[0].lecture?.video
                }
              />
            )}

            <div className={cx([style.wrapperTabs, "wrapperTabs"])}>
              {" "}
              <Tabs defaultActiveKey="1" items={itemTabs} />
            </div>
          </div>
          <div className={cx(style.lecture)}>
            <ListCourse
              refresh={refresh}
              courseId={course.course.id}
              sections={course.course.sections.sort((a, b) => a.id - b.id)}
              lectureBeingLearned={course.lectureBeingLearned}
              setLectureSelected={setLectureSelected}
            ></ListCourse>
          </div>
        </div>
      )}
    </>
  );
}
