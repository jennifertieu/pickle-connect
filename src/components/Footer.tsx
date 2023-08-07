const Footer = () => {
  const year = new Date(Date.now()).getFullYear();
  return (
    <footer className="p-4 text-center text-sm">{year} © PickleConnect</footer>
  );
};

export default Footer;
