import { createBrowserRouter } from "react-router-dom";
import Layout from "../Common/Layout";
import HomeScreen from "../Pages/HomeScreen";
import CreateArticle from "../Pages/CreateArticle";
import DetailScreen from "../Pages/DetailScreen";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        index: true,
        path: "/create-article",
        element: <CreateArticle />,
      },
      {
        index: true,
        path: "/:articleID/article",
        element: <DetailScreen />,
      },
    ],
  },
]);
