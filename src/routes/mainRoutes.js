import Root from "../Pages/Root";
import aboutusRoutes from "./aboutusRoutes";
import galleryRoutes from "./galleryRoutes";
import homeRoutes from "./homeRoutes";


const mainRoutes = [
  {
    path: "/",
    element: <Root />,
    children: [
        ...homeRoutes,
        ...aboutusRoutes,
        ...galleryRoutes,
    ],
  },
];

export default mainRoutes;
