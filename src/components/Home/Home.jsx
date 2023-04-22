import classNames from "classnames";
import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";

import right from "../../access/img/right.svg";
import left from "../../access/img/left.svg";
import slide1 from "./slide1.svg";
import 'react-multi-carousel/lib/styles.css';

import style from "./style.module.scss";
import CircleBotton from "../Button/CircleBotton";
import Title from "./Title/Title";
import CartCourse from "./CartCourse/CartCourse";
import CartToppic from "./CartToppic";
import { Image } from "semantic-ui-react";
import './style2.css'
const cx = classNames.bind(style);

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 60
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 50
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30
  }
};

const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];
export default function Home() {
  const [lenghtScroll, setLenghtScroll] = useState(0);
  const list = useRef();
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
        min: 1024
      },
      items: 5,
      partialVisibilityGutter: 40
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0
      },
      items: 1,
      partialVisibilityGutter: 30
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464
      },
      items: 2,
      partialVisibilityGutter: 30
    }
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
<CartCourse title={"cart 1"} />
          <CartCourse title={"cart 2"} />
          <CartCourse title={"cart 3"} />
          <CartCourse title={"cart 4"} />
          <CartCourse title={"cart 5"} />
          <CartCourse title={"cart 6"} />
          <CartCourse title={"cart 7"} />
</Carousel>
        {/* <div ref={list} className={cx(style.listCourse)}>
          <div className={cx(style.wrapperButton, style.buttonLRLC)}>
            <CircleBotton icon={right} />
            <CircleBotton icon={left} />
          </div>
          <CartCourse title={"cart 1"} />
          <CartCourse title={"cart 2"} />
          <CartCourse title={"cart 3"} />
          <CartCourse title={"cart 4"} />
          <CartCourse title={"cart 5"} />
          <CartCourse title={"cart 6"} />
          <CartCourse title={"cart 7"} />
        </div> */}
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
