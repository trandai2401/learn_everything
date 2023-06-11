import instance from "./instance";

const cartService = {
  get: async () => {
    const res = await instance.get("/cart");
    return res.data;
  },
  add: async (courseId) => {
    const res = await instance.post("/cart", { courseId: courseId });
    return res.data;
  },
  delete: async (courseId) => {
    const res = await instance.delete("/cart/" + courseId);
    return res.data;
  },
  getMycourses: async () => {
    const res = await instance.get("/cart/mycart");
    return res.data;
  },
  updateLecturingBeLearn: async (cartId, lecId) => {
    const res = await instance.post("/cart/updateLecBeingLearn", {
      cartId,
      lecId,
    });
  },
};

export default cartService;
