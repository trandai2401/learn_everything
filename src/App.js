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
import MyCourse from "./pages/MyCourse";
import Dasfboard from "./components/layouts/Dashboard";
import ListCourse from "./pages/Dashboard/ListCourse";
import AddCourse from "./pages/Dashboard/AddCourse";
import EditCourse from "./pages/Dashboard/EditCourse";
import Search from "./pages/Search/Search";
import Statistical from "./pages/Dashboard/Statistical/Statistical";
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
      {
        path: "course-management",
        element: <MyCourse />,
      },
      { path: "search", element: <Search /> },
    ],
  },
  {
    path: "/dashboard",
    element: <Dasfboard />,
    children: [
      { path: "coursies", element: <ListCourse /> },
      { path: "coursies/:courseId", element: <EditCourse /> },

      { path: "addCourse", element: <AddCourse /> },
      { path: "statistical", element: <Statistical /> },
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
