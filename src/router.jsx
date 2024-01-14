import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Charts from "./routes/charts/charts";
import Tables from "./routes/tables/tables";
import Sliders from "./routes/sliders/sliders";
import Sample from "./routes/sample/sample";

const options = {
  basename: "/react-project",
};

const routes = [
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sample",
        element: <Sample />,
      },

      {
        path: "/charts",
        element: <Charts />,
      },
      {
        path: "/tables",
        element: <Tables />,
      },
      {
        path: "/sliders",
        element: <Sliders />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes, options);
