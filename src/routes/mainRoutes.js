import Root from "../Pages/Root";
import aboutusRoutes from "./aboutusRoutes";
import contactusRoutes from "./contactusRoutes";
import eventsRoutes from "./eventsRoutes";
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
        ...contactusRoutes,
        ...eventsRoutes,
    ],
  },
];

export default mainRoutes;
