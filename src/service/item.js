import instance from "./instance";

const lesson = {
  create: async (data) => {
    const res = await instance.post(
      "/item",
      { ...data },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
  },
  checkTest: async (data) => {
    const res = await instance.post("/item/check", data);
    return res.data;
  },
};

export default lesson;
