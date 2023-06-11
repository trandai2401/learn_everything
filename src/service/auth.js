import instance from "./instance";

const login = async (email, password) => {
  const response = await instance.post("auth/login", {
    email: email,
    password: password,
  });

  return response.data;
};

const authService = {
  signUp: async (data) => {
    return await instance.post("account", {
      ...data,
    });
  },
  getMe: async () => {
    const data = await instance
      .get("auth/profile")
      .then((res) => res.data)
      .catch((error) => error);
    return data;
  },
};

export { login, authService };
