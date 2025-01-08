import ActiveButton from "./Button";

const Navbar = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between items-center py-5 px-12 lg:px-36">
      <div className="flex w-full lg:w-auto items-center justify-between">
        <a href="/" className="flex items-center text-lg font-bold">
          <img
            src="/CardImage.png"
            alt="SportFolio Logo"
            className="h-16 w-16 mr-2"
          />
          <span className="text-slate-200">Sport</span>
          <span className="text-slate-400">Folio</span>
        </a>
        <button
          id="astronav-menu"
          aria-label="Toggle Menu"
          className="lg:hidden"
        >
          <svg
            fill="currentColor"
            className="w-6 h-6 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <title>Toggle Menu</title>
            <path
              className="astronav-close-icon astronav-toggle hidden"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
            ></path>
            <path
              className="astronav-open-icon astronav-toggle"
              fillRule="evenodd"
              d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
            ></path>
          </svg>
        </button>
      </div>

      <nav className="astronav-items astronav-toggle hidden lg:flex flex-col lg:flex-row w-full lg:w-auto mt-4 lg:mt-0">
        <ul className="flex flex-col lg:flex-row lg:gap-6">
          {["About Us", "How It Works", "Marketplaces", "News & Updates"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href="/"
                  className="flex px-3 py-2 text-white hover:text-gray-300 transition"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="mt-4 lg:mt-0 lg:flex items-center">
        <ActiveButton>Get Started</ActiveButton>
      </div>
    </header>
  );
};

export default Navbar;
