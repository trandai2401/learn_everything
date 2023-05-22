import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import Home from "./components/Home/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProfileAsync } from "./redux/authSlice";
import WatchVideo from "./pages/WatchVideo";
import Cart from "./pages/Cart";
import Course from "./pages/Course";
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
      {
        path: "watch/:idLecture",
        element: <WatchVideo />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "course/:id",
        element: <Course />,
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
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
