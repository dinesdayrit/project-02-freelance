const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-4 text-center">
      <p className="m-0">&copy; {currentYear} Spancept. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
