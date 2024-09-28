import React, { useState } from "react";
import { Link } from "react-router-dom";

const articlesData = [
  {
    id: 1,
    title: "The Evolution of Art Through History",
    description:
      "Explore how art has transformed over centuries and what we can learn from ancient masterpieces.",
    image:
      "https://cdn.pixabay.com/photo/2015/11/03/08/57/patriot-1019838_1280.jpg",
  },
  {
    id: 2,
    title: "Sustainability in Modern Museums",
    description:
      "How museums around the world are adopting eco-friendly solutions to preserve culture while protecting the planet.",
    image: "https://cdn.pixabay.com/photo/2012/10/10/15/51/man-60644_640.jpg",
  },
  {
    id: 3,
    title: "The Role of Technology in Museums",
    description:
      "Discover how museums are leveraging technology to offer interactive and immersive experiences.",
    image:
      "https://cdn.pixabay.com/photo/2015/11/03/08/57/patriot-1019838_1280.jpg",
  },
  {
    id: 4,
    title: "Ancient Civilizations on Display",
    description:
      "A journey through exhibitions that showcase the remains and stories of ancient civilizations.",
    image: "https://cdn.pixabay.com/photo/2012/10/10/15/51/man-60644_640.jpg",
  },
  {
    id: 5,
    title: "Cultural Heritage and Preservation",
    description:
      "How museums play a vital role in preserving cultural heritage for future generations.",
    image:
      "https://cdn.pixabay.com/photo/2015/11/03/08/57/patriot-1019838_1280.jpg",
  },
  {
    id: 6,
    title: "Virtual Museum Tours: A New Era",
    description:
      "The rise of virtual tours and how they’re making museums accessible to everyone, anywhere.",
    image: "https://cdn.pixabay.com/photo/2012/10/10/15/51/man-60644_640.jpg",
  },
  // Add more articles if needed
];

const ArticlesHeroSection = () => {
  // Number of articles to show initially
  const initialCount = 4;
  const [visibleArticles, setVisibleArticles] = useState(initialCount);

  // Handler for loading more articles
  const loadMoreArticles = () => {
    setVisibleArticles((prevVisible) => prevVisible + initialCount);
  };

  return (
    <section className="articles-section bg-gray-100">
      {/* Hero Section */}
      <div
        className="w-full min-h-96 mt-[64px] bg-cover bg-center relative"
        style={{
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2024/08/28/14/32/cityscape-9004205_1280.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-6">
          <h1 className="text-5xl font-bold mb-4">
            Discover the World of Museums
          </h1>
          <p className="text-xl mb-6">
            Dive into the latest stories, trends, and innovations from the
            museum world.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Featured Articles */}
        <div className="featured-articles mb-12">
          <h2 className="text-4xl font-bold text-center mb-10">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {articlesData.slice(0, visibleArticles).map((article) => (
              <div
                key={article.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                <Link to={`/article/${article.id}`}>
                  {/* Image Section */}
                  <div className="relative">
                    <img
                      className="w-full h-40 object-cover"
                      src={article.image}
                      alt={article.title}
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-3 flex flex-col justify-between h-40">
                    <h3 className="text-base font-semibold text-gray-800 truncate">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 mt-1 text-sm line-clamp-2">
                      {article.description}
                    </p>
                    <div className="mt-3">
                      <button className="bg-blue-600 text-white px-3 py-1.5 rounded-md text-sm hover:bg-blue-700 transition-colors duration-200">
                        Read More
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleArticles < articlesData.length && (
            <div className="flex justify-center mt-10">
              <button
                onClick={loadMoreArticles}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ArticlesHeroSection;
