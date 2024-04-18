import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Frame from "pages/Frame";
import FrameOne from "pages/FrameOne";
import FrameTwo from "pages/FrameTwo";
import FrameThree from "pages/FrameThree";
import FrameFour from "pages/FrameFour";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "frame",
      element: <Frame />,
    },
    {
      path: "frameone",
      element: <FrameOne />,
    },
    {
      path: "frametwo",
      element: <FrameTwo />,
    },
    {
      path: "framethree",
      element: <FrameThree />,
    },
    {
      path: "framefour",
      element: <FrameFour />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
