import NotFound from "../Pages/NotFound";
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
        ...aboutusRoutes,
        ...exhibitionRoutes,
        {
          path: "*", // Catch all unmatched routes
          element: <NotFound />, // Render the NotFound component
        },
    ],
  },
];

export default mainRoutes;
