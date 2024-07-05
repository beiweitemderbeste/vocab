import ReactDOM from "react-dom/client";

import "./index.css";

import NotFound from "./components/NotFound";
import MainMenu from "./components/MainMenu";
import SinglePlayer from "./components/singleplayer/SinglePlayer";
import SinglePlayerGame from "./components/singleplayer/SinglePlayerGame";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <MainMenu />,
  },
  {
    path: "/singleplayer",
    element: <SinglePlayer />,
  },
  {
    path: "/spgame",
    element: <SinglePlayerGame />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(<RouterProvider router={router} />);
