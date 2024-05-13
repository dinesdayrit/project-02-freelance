import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const MainNav = () => {
  const [scrollDown, setScrollDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuTextColor, setMenuTextColor] = useState("text-black"); // Default text color

  const menuStyles = scrollDown ?
    `px-3 py-2 text-xs font-bold md:text-base text-white text-left hover:text-orange-500` :
    `px-3 py-2 text-xs font-bold md:text-base text-left hover:text-orange-500 ${menuTextColor}`;

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

  useEffect(() => {
    // Change text color to white when menu is open on small screens
    if (isMenuOpen) {
      setMenuTextColor("text-white");
    } else {
      setMenuTextColor("text-black");
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`items-center md:flex fixed top-0 w-full z-50 ${scrollDown ? 'bg-sky-900' : ''} ${isMenuOpen ? 'bg-sky-900' : ''}`}>
      <div className="flex items-center justify-between md:justify-end lg:justify-end w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-orange-500 text-xl font-bold md:hidden lg:hidden">Spancept</h1>

        <div className="md:hidden ml-auto">
          <button 
            onClick={toggleMenu} 
            data-collapse-toggle="navbar-default" 
            type="button" 
            className="flex flex-col items-center w-10 h-10 justify-center text-sm text-orange-300 rounded-lg hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-default" 
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg 
              className="w-5 h-5" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
          </button>
        </div>
      </div> 

      <div className={`md:p-8 flex flex-col md:block w-1.5 md:w-auto md:ml-auto mr-16 ${isMenuOpen ? '' : 'hidden'}`} id="navbar-default">
        <Link to="home" className={menuStyles} activeClass="activeLink" spy={true} offset={-100} smooth={true} duration={500} onClick={toggleMenu}>
          Home
        </Link>
        <Link to="about" className={menuStyles} activeClass="activeLink" spy={true} offset={-100} smooth={true} duration={500} onClick={toggleMenu}>
          About
        </Link>
        <Link to="products" className={menuStyles} activeClass="activeLink" spy={true} offset={-100} smooth={true} duration={500} onClick={toggleMenu}>
          Products
        </Link>
        <Link to="contact" className={menuStyles} activeClass="activeLink" spy={true} offset={-100} smooth={true} duration={500} onClick={toggleMenu}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default MainNav;
