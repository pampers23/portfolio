const Footer = () => {
  return (
    <footer className="bg-neutral-950 text-white px-4 py-6">
      <div className="max-w-6xl mx-auto flex justify-center text-sm">
        <p className="text-center">
          &copy; {new Date().getFullYear()} Lance Brixter Mendoza. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
