import React, { useEffect, useState } from "react";
import Course from "./Course";
import courseService from "../../../service/courseService";

export default function ListCourse() {
  const [coursies, setCoursies] = useState([]);
  useEffect(() => {
    const fun = async () => {
      const coursies = await courseService.courseOwner();
      setCoursies(coursies);
    };

    fun();
  }, []);
  return (
    <>
      <h3>Danh sách khóa học</h3>
      {coursies.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </>
  );
}
