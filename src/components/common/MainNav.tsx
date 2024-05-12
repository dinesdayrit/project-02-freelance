import React from 'react';

const MainNav = () => {
  const menuStyles = "px-3 py-2 text-xs md:text-base text-white text-left hover:underline-yellow-200 hover:border-b-2 hover:border-yellow-200";

  const smoothScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="flex justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-white font-bold">LOGO HERE</h1>
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <a href="#home" className={menuStyles} onClick={(e) => smoothScroll(e, 'home')}>
              Home
            </a>
            <a href="#about" className={menuStyles} onClick={(e) => smoothScroll(e, 'about')}>
              About
            </a>
            <a href="#products" className={menuStyles} onClick={(e) => smoothScroll(e, 'products')}>
              Products
            </a>
            <a href="#contact" className={menuStyles} onClick={(e) => smoothScroll(e, 'contact')}>
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
