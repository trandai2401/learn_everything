import React, { useEffect, useState } from "react";
import courseService from "../../../service/courseService";
import { useParams } from "react-router-dom";
import AddSection from "./AddSection";
import Section from "./Section";
import style from "./style.module.scss";
import classNames from "classnames";
const cx = classNames.bind(style);
export default function EditCourse() {
  const [course, setCourse] = useState();
  const { courseId } = useParams();

  const reFresh = async () => {
    const detailt = await courseService.detailtCourseWithTeacher(courseId);
    setCourse(detailt);
  };
  useEffect(() => {
    const fun = async () => {
      const detailt = await courseService.detailtCourseWithTeacher(courseId);
      setCourse(detailt);
    };
    fun();
  }, []);

  return course ? (
    <>
      <div className={cx([style.wrapper])}>
        <h2>{course.title}</h2>
        <h4>Mô tả: {course.description}</h4>

        <h2>Danh sách chương: </h2>
        {course.sections.map((section, index) => (
          <Section
            key={index}
            section={section}
            index={index}
            reFresh={reFresh}
          />
        ))}
        <AddSection courseId={courseId} reFresh={reFresh} />
      </div>
    </>
  ) : (
    <></>
  );
}
