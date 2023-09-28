import "./global.css";
import * as React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "../node_modules/react-router-dom/dist/index";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import About from "./routes/about";
import Home from "./routes/home";
import { Provider } from "react-redux";
import store from "./redux/configureStore";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
