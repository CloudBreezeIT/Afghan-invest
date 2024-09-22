import Root from "../Pages/Root";
import aboutusRoutes from "./aboutusRoutes";
import homeRoutes from "./homeRoutes";


const mainRoutes = [
  {
    path: "/",
    element: <Root />,
    children: [
        ...homeRoutes,
        ...aboutusRoutes,
    ],
  },
];

export default mainRoutes;
