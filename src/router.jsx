import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Home from "./routes/home";
import Charts from "./routes/charts";

const opts = {
  basename: "/react-project"
}

const routes = [
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/charts",
        element: <Charts />,
      },
    ],
  },
]

export const router = createBrowserRouter(routes, opts);