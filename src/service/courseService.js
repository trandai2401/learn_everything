import instance from "./instance";

const courseService = {
  getOne: async (id) => {
    const rourses = await instance.get("/course/" + id);
    return rourses.data;
  },
  getAll: async (pageNumber = 1, pageSize = 6) => {
    const rourses = await instance.get("/course", {
      params: {
        pageNumber,
        pageSize,
      },
    });

    return rourses.data;
  },
  create: async (data) => {
    const rourses = await instance.post(
      "/course",
      {
        ...data,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    return rourses.data;
  },
  courseOwner: async () => {
    const rourses = await instance.get("course/owner");

    return rourses.data;
  },

  detailtCourseWithTeacher: async (id) => {
    const course = await instance.get("course/data/" + id);

    return course.data;
  },
  getCourseToLearn: async (id) => {
    const res = await instance.get(`course/purchasedcourse/${id}`);
    return res.data;
  },

  getAllComment: async (courseId) => {
    const res = await instance.get("comment/getAllbyCourse", {
      params: { courseId: courseId },
    });

    return res.data;
  },
  search: async (data) => {
    const res = await instance.get("course/search", {
      params: data,
    });

    return res.data;
  },
};
export default courseService;
