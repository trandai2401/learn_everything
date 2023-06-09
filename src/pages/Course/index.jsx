import React, { useEffect, useMemo, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { Link, useParams } from "react-router-dom";
import to from "./to.svg";
import start_1 from "./start-1.svg";
import start_5 from "./start-5.svg";
import star_0 from "./start-0.svg";
import clock from "./clock.svg";
import Carousel from "react-multi-carousel";
import courseService from "../../service/courseService";
import CartCourse from "../../components/Home/CartCourse/CartCourse";
import Tree from "antd/es/tree";
import "./style.css";
import Button from "../../components/Button/Button";
import formatNumber, { formatDate } from "../../unitls";
import cartService from "../../service/cartService";
import { useDispatch } from "react-redux";
import { setStatus, updateCarts } from "../../redux/cartSlice";
const { DirectoryTree } = Tree;

const cx = classNames.bind(style);

export default function Course() {
  const { id } = useParams();
  const [courses, setrCourses] = useState([]);
  const [course, setCourse] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const runFun = async () => {
      let coursies = await courseService.getAll();
      setrCourses(coursies);

      let course = await courseService.getOne(id);
      setCourse(course[0]);
    };
    runFun();
  }, []);

  const treeDate = useMemo(() => {
    return course?.sections.map((section, index) => ({
      title: (
        <div
          style={{ display: "inline-flex", justifyContent: "space-between" }}
        >
          <span className={cx([style.title_section])}>
            Chương {index + 1}: {section.title}
          </span>
          <span className={cx([style.description])}>
            {" "}
            {section.items.length} bài học
          </span>
        </div>
      ),
      key: "0-0",
      className: "section",
      children: section.items.map((item, index) => ({
        title: `Bài ${index + 1}: ` + item.title,
        key: item.id,
        isLeaf: true,
        className: "section",
      })),

      // [
      //   { title: "leaf 0-0", key: "0-0-0", isLeaf: true, className: "section" },
      //   { title: "leaf 0-1", key: "0-0-1", isLeaf: true, className: "section" },
      // ],
    }));
  }, [course]);
  // const treeData = [
  //   {
  //     title: (
  //       <div
  //         style={{ display: "inline-flex", justifyContent: "space-between" }}
  //       >
  //         <span className={cx([style.title_section])}>
  //           Magna fringilla urna porttitor rhoncus dolor purus non. Magna
  //           fringilla urna porttitor rhoncus dolor purus non.
  //         </span>
  //         <span className={cx([style.description])}> 12 bafi hojc</span>
  //       </div>
  //     ),
  //     key: "0-0",
  //     className: "section",
  //     children: [
  //       { title: "leaf 0-0", key: "0-0-0", isLeaf: true, className: "section" },
  //       { title: "leaf 0-1", key: "0-0-1", isLeaf: true, className: "section" },
  //     ],
  //   },
  //   {
  //     title: "parent 1",
  //     key: "0-1",
  //     className: "section",

  //     children: [
  //       { title: "leaf 1-0", key: "0-1-0", isLeaf: true, className: "section" },
  //       { title: "leaf 1-1", key: "0-1-1", isLeaf: true, className: "section" },
  //     ],
  //   },
  // ];
  return (
    <>
      {" "}
      {course && (
        <>
          {" "}
          <div className={cx([style.top])}>
            <div className={cx([style.image])}>
              <img
                src={
                  course?.image?.mediumUrl ||
                  "https://i.ibb.co/YQV9nWP/27f4227fa557.webp"
                }
                alt=""
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <h3>
                  {formatNumber(course.price)} <span>đ</span>
                </h3>
                <Button
                  onClick={async () => {
                    await cartService.add(course.id);
                    dispatch(updateCarts());
                    dispatch(setStatus(true));
                  }}
                  border
                  backgrourdColor={"#F2184F"}
                  colorText={"white"}
                >
                  Add to Cart
                </Button>
                <Button border>Buy now</Button>
              </div>
            </div>
            <div className={cx([style.wrapper_category])}>
              <Link className={cx([style.link_category])} to="#">
                Danh mục
              </Link>{" "}
              <img src={to} alt="" />{" "}
              <Link className={cx([style.link_category])} to="#">
                {course.subCategories[0].name}
              </Link>{" "}
              {/* <img src={to} alt="" />{" "} */}
              {/* <Link className={cx([style.link_category])} to="#">
            Danh mục
          </Link>{" "} */}
            </div>
            <h2 className={cx(style.title)}>{course.title}</h2>

            <span className={cx(style.description)}>{course.description}</span>

            <div className={cx([style.rating])}>
              <span className={cx([style.number])}>4.5</span>{" "}
              <img src={start_1} alt="" /> <img src={start_1} alt="" />{" "}
              <img src={start_1} alt="" /> <img src={start_5} alt="" />
              <img src={star_0} alt="" />
              <span className={cx([style.number_review])}>
                (200 000 reviews)
              </span>
            </div>

            <span className={cx([style.created_by])}>
              Create by <Link to={""}>{course.created_by.fullName}</Link>
            </span>

            <div className={cx([style.last_update])}>
              <span>
                Last update {formatDate(new Date(course.created_at))} and still
                updating{" "}
              </span>{" "}
              <img src={clock} alt="" />
            </div>
          </div>
          <div className={cx([style.conent_course])}>
            <h3>Nội dung khóa học</h3>
            <DirectoryTree multiple defaultExpandAll treeData={treeDate} />
          </div>
          <div className={cx(style.youmaylike)}>
            <div className={cx([style.title])}>
              You may also <span>like</span>
            </div>
            <div className={cx([style.line])}></div>

            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              className=""
              containerClass="container-with-dots"
              dotListClass=""
              draggable
              focusOnSelect={false}
              infinite
              itemClass=""
              keyBoardControl
              minimumTouchDrag={80}
              pauseOnHover
              renderArrowsWhenDisabled={false}
              renderButtonGroupOutside={false}
              renderDotsOutside={false}
              responsive={{
                desktop: {
                  breakpoint: {
                    max: 3000,
                    min: 1024,
                  },
                  items: 5,
                  partialVisibilityGutter: 40,
                },
                mobile: {
                  breakpoint: {
                    max: 464,
                    min: 0,
                  },
                  items: 1,
                  partialVisibilityGutter: 30,
                },
                tablet: {
                  breakpoint: {
                    max: 1024,
                    min: 464,
                  },
                  items: 2,
                  partialVisibilityGutter: 30,
                },
              }}
              rewind={false}
              rewindWithAnimation={false}
              rtl={false}
              shouldResetAutoplay
              showDots={false}
              sliderClass=""
              slidesToSlide={1}
              swipeable
            >
              {courses.map((course) => {
                return (
                  <CartCourse
                    key={course.id}
                    title={"cart 1"}
                    course={course}
                  />
                );
              })}
            </Carousel>
          </div>
        </>
      )}
    </>
  );
}
