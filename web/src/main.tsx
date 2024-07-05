import ReactDOM from "react-dom/client";
import MainMenu from "./components/MainMenu";
import SinglePlayer from "./components/SinglePlayer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />,
  },
  {
    path: "singleplayer",
    element: <SinglePlayer />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(<RouterProvider router={router} />);
