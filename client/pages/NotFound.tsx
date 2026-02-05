import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="text-center px-4">
        <h1 className="text-8xl font-playfair text-white mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-8">
          This path doesn't exist in our world
        </p>
        <a
          href="/"
          className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300"
        >
          Return to Apex Elite
        </a>
      </div>
    </div>
  );
};

export default NotFound;
