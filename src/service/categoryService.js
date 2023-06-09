import instance from "./instance";

export const categoryService = {
  getAllSubCategory:  async () => {
    const rourses = await instance.get("/sub-category");
    return rourses.data;
  },
};
