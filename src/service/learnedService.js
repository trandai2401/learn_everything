import instance from "./instance";

export const learnedService = {
  create: async (itemId) => {
    const res = await instance.post("learned", { itemId });
    return res.data;
  },
};
