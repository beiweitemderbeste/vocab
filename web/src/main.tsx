import ReactDOM from "react-dom/client";
import MainMenu from "./components/MainMenu";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(<RouterProvider router={router} />);
