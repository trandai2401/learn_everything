import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
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
const { DirectoryTree } = Tree;

const cx = classNames.bind(style);

export default function Course() {
  const [courses, setrCourses] = useState([]);
  useEffect(() => {
    const runFun = async () => {
      let course = await courseService.getAll();
      setrCourses(course);
      // console.log(course);
    };
    runFun();
  }, []);

  const treeData = [
    {
      title: (
        <div
          style={{ display: "inline-flex", justifyContent: "space-between" }}
        >
          <span className={cx([style.title_section])}>
            Magna fringilla urna porttitor rhoncus dolor purus non. Magna
            fringilla urna porttitor rhoncus dolor purus non.
          </span>
          <span className={cx([style.description])}> 12 bafi hojc</span>
        </div>
      ),
      key: "0-0",
      className: "section",
      children: [
        { title: "leaf 0-0", key: "0-0-0", isLeaf: true, className: "section" },
        { title: "leaf 0-1", key: "0-0-1", isLeaf: true, className: "section" },
      ],
    },
    {
      title: "parent 1",
      key: "0-1",
      className: "section",

      children: [
        { title: "leaf 1-0", key: "0-1-0", isLeaf: true, className: "section" },
        { title: "leaf 1-1", key: "0-1-1", isLeaf: true, className: "section" },
      ],
    },
  ];
  return (
    <>
      {" "}
      <div className={cx([style.top])}>
        <div className={cx([style.image])}>
          <img src="https://i.ibb.co/YQV9nWP/27f4227fa557.webp" alt="" />
          <div style={{ display: "flex" }}>
            <h3>
              350.000 <span>đ</span>
            </h3>
            <Button>Add to Cart</Button>
            <Button>Buy now</Button>
          </div>
        </div>
        <div className={cx([style.wrapper_category])}>
          <Link className={cx([style.link_category])} to="#">
            Danh mục
          </Link>{" "}
          <img src={to} alt="" />{" "}
          <Link className={cx([style.link_category])} to="#">
            Danh mục
          </Link>{" "}
          <img src={to} alt="" />{" "}
          <Link className={cx([style.link_category])} to="#">
            Danh mục
          </Link>{" "}
        </div>
        <h2 className={cx(style.title)}>
          Guide to using Prometheus from beginner to elite in a short time.Guide
          to using Prometheus from beginner to elite in a short time.
        </h2>

        <span className={cx(style.description)}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua
        </span>

        <div className={cx([style.rating])}>
          <span className={cx([style.number])}>4.5</span>{" "}
          <img src={start_1} alt="" /> <img src={start_1} alt="" />{" "}
          <img src={start_1} alt="" /> <img src={start_5} alt="" />
          <img src={star_0} alt="" />
          <span className={cx([style.number_review])}>(200 000 reviews)</span>
        </div>

        <span className={cx([style.created_by])}>
          Create by <Link to={""}>Tran Dai</Link>
        </span>

        <div className={cx([style.last_update])}>
          <span>Last update and still updating </span>{" "}
          <img src={clock} alt="" />
        </div>
      </div>
      <div className={cx([style.conent_course])}>
        <h3>Nội dung khóa học</h3>
        <DirectoryTree multiple defaultExpandAll treeData={treeData} />
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
              <CartCourse key={course.id} title={"cart 1"} course={course} />
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
