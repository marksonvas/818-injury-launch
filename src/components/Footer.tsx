const Footer = () => (
  <footer id="footer" className="bg-dark-navy py-6">
    <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
      <p className="text-gray-500 text-[11px]">
        © 2025 818Injury.com · Serving Van Nuys, Encino, Burbank, Chatsworth & all of the 818
      </p>
      <div className="flex gap-4">
        {["Privacy Policy", "Terms", "Disclaimer"].map((link) => (
          <a
            key={link}
            href="#"
            className="text-gray-500 text-[11px] hover:text-gray-400 transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
