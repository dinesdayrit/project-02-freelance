const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-sky-900 py-4 text-center">
      <p className="text-white">&copy; {currentYear} Spancept. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
