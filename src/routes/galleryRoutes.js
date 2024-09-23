import Gallery from '../Pages/gallery-page/Gallery'
import GalleryVideos from '../Pages/gallery-page/GalleryVideos';

const galleryRoutes = [
  {
    path: "/gallery/photos",
    element: <Gallery />
  },
  {
    path: "/gallery/videos",
    element: <GalleryVideos />
  },
];

export default galleryRoutes;
