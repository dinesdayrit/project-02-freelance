import React, { useState, useEffect } from 'react';

const MainNav = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const menuStyles = "px-3 py-2 text-xs font-bold md:text-base text-black text-left hover:text-orange-500";
  const navStyles = scrollDown ? "" : "fixed z-10 py-4 w-full";

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

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrollDown(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={navStyles}>
      <div className="flex items-center sm:justify-between md:justify-end lg:justify-end   max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-orange-500 text-xl font-bold md:hidden lg:hidden">Spancept</h1>
        <div className="flex justify-end space-x-4">
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
    </nav>
  );
};

export default MainNav;
