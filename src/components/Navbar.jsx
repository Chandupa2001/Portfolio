import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4 sm:px-14">
      <div className={`flex-shrink-0 ${isMobile ? "flex-1 text-center" : ""}`}>
        <a href="/" className="text-2xl font-bold">Portfolio</a>
      </div>
      <div className={`flex-1 flex justify-end ${isMobile ? "hidden" : ""}`}>
        <div className="flex gap-10 text-xl font-medium">
          <a href="#about" className="hover:text-gray-500">
            About
          </a>
          <a href="#technology" className="hover:text-gray-500">
            Technologies
          </a>
          <a href="#projects" className="hover:text-gray-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
