import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Home from "./components/Home/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import { useEffect } from "react";
import { getProfileAsync } from "./redux/authSlice";
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign_up",
        element: <SignUp />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProfileAsync());
  }, []);
  return (
      <RouterProvider router={router} />
  );
}

export default App;
