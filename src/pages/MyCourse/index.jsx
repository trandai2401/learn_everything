import React, { useEffect, useState } from "react";
import cartService from "../../service/cartService";
import CartCourse from "./CartCourse/CartCourse";
import classNames from "classnames";
import style from "./style.module.scss";
// import

const cx = classNames.bind(style);
export default function MyCourse() {
  const [myCourse, setMyCourse] = useState([]);
  useEffect(() => {
    const fun = async () => {
      const coursies = await cartService.getMycourses();
      setMyCourse(
        coursies.map((cart) => ({ id: cart.courseId, ...cart.course }))
      );
    };
    fun();
  }, []);
  return (
    <div className={cx([style.wrapper])}>
      <h1>Danh sách khóa học của bạn</h1>
      <div class={cx([style["grid-container"]])}>
        {myCourse.map((course) => (
          <CartCourse
            key={course.id}
            title={"cart 1"}
            course={course}
            courseId={course.id}
          />
        ))}
      </div>
    </div>
  );
}
