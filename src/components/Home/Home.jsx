import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";

import right from "../../access/img/right.svg";
import left from "../../access/img/left.svg";
import slide1 from "./slide1.svg";
import "react-multi-carousel/lib/styles.css";

import style from "./style.module.scss";
import CircleBotton from "../Button/CircleBotton";
import Title from "./Title/Title";
import CartCourse from "./CartCourse/CartCourse";
import CartToppic from "./CartToppic";
import courseService from "../../service/courseService";
const cx = classNames.bind(style);

export default function Home() {
  const [lenghtScroll, setLenghtScroll] = useState(0);
  const list = useRef();
  const [courses, setrCourses] = useState([]);
  useEffect(() => {
    const runFun = async () => {
      let course = await courseService.getAll();
      setrCourses(course);
      // console.log(course);
    };
    runFun();
  }, []);
  return (
    <div>
      <div className={cx(style.slide)}>
        <div className={cx(style.wrapperButton)}>
          <CircleBotton icon={right} />
          <CircleBotton icon={left} />
        </div>
        <div className={cx(style.cycle)}></div>
        <img src={slide1} alt="" />
      </div>

      <div className={cx(style.courses)}>
        <Title text="Dành cho" strong="Bạn" />
        <button
          onClick={() => {
            let id = null;
            let pos = lenghtScroll;
            clearInterval(id);

            id = setInterval(frame, 5);
            function frame() {
              if (pos >= lenghtScroll + list.current.clientWidth / 5) {
                clearInterval(id);
                setLenghtScroll(lenghtScroll + list.current.clientWidth / 5);
              } else {
                pos += 5;
                list.current.scrollLeft = pos;
              }
            }
          }}
        >
          scoll
        </button>
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

        <Title text="Topics recommended for" strong="You" />
        <div ref={list} className={cx(style.listCourse, style.toppic)}>
          <CartToppic />
          <CartToppic />
          <CartToppic />
          <CartToppic />
          <CartToppic />
          <CartToppic />
          <CartToppic />
          <CartToppic />
          <CartToppic />
          <CartToppic />
        </div>
      </div>
    </div>
  );
}
