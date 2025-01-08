import React from "react";
import ActiveButton from "./Button";

const Navbar = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between items-center my-5 mx-16">
      {" "}
      <div className="flex w-full lg:w-auto items-center justify-between">
        {" "}
        <a href="/" className="text-lg">
          <span className="font-bold text-slate-800">Sport</span>
          <span className="text-slate-500">Folio</span>{" "}
        </a>{" "}
        <div className="block lg:hidden">
          {" "}
          <button id="astronav-menu" aria-label="Toggle Menu">
            {" "}
            <svg
              fill="currentColor"
              className="w-4 h-4 text-gray-800"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              xmlns="https://www.w3.org/2000/svg"
            >
              {" "}
              <title>Toggle Menu</title>{" "}
              <path
                className="astronav-close-icon astronav-toggle hidden"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
              ></path>{" "}
              <path
                className="astronav-open-icon astronav-toggle"
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
              ></path>{" "}
            </svg>{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      <nav className="astronav-items astronav-toggle hidden w-full lg:w-auto mt-2 lg:flex lg:mt-0">
        {" "}
        <ul className="flex flex-col lg:flex-row lg:gap-3">
          {" "}
          <li className="relative">
            {" "}
            <menu className="astronav-dropdown group" aria-expanded="false">
              {" "}
              <button className="flex items-center gap-1 w-full lg:w-auto lg:px-3 py-2 text-gray-600 hover:text-gray-900">
                {" "}
                <span>Features</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="3"
                  stroke="currentColor"
                  className="w-3 h-3 mt-0.5 group-open:rotate-180"
                >
                  {" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>{" "}
                </svg>{" "}
              </button>{" "}
              <div
                className="astronav-dropdown dropdown-toggle hidden"
                aria-expanded="false"
              >
                {" "}
                <div className="lg:absolute w-full lg:w-48 z-10 lg:left-0 origin-top-left">
                  {" "}
                  <div className="px-3 lg:py-2 lg:bg-white lg:rounded-md lg:shadow lg:border flex flex-col">
                    {" "}
                    <a
                      href="/"
                      className="py-1 text-gray-600 hover:text-gray-900"
                    >
                      {" "}
                      Action{" "}
                    </a>
                    <a
                      href="#"
                      className="py-1 text-gray-600 hover:text-gray-900"
                    >
                      {" "}
                      Another action{" "}
                    </a>
                    <a
                      href="#"
                      className="py-1 text-gray-600 hover:text-gray-900"
                    >
                      {" "}
                      Dropdown Submenu{" "}
                    </a>
                    <a
                      href="/404"
                      className="py-1 text-gray-600 hover:text-gray-900"
                    >
                      {" "}
                      404 Page{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </menu>{" "}
          </li>
          <li>
            {" "}
            <a
              href="/pricing"
              className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
            >
              {" "}
              <span> Pricing</span>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="/about"
              className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
            >
              {" "}
              <span> About</span>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="/blog"
              className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
            >
              {" "}
              <span> Blog</span>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="/contact"
              className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
            >
              {" "}
              <span> Contact</span>{" "}
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="https://astroship-pro.web3templates.com/"
              className="flex lg:px-3 py-2 items-center text-gray-600 hover:text-gray-900"
            >
              {" "}
              <span> Pro Version</span>{" "}
              <span className="ml-1 px-2 py-0.5 text-[10px] animate-pulse font-semibold uppercase text-white bg-indigo-600 rounded-full">
                New
              </span>{" "}
            </a>{" "}
          </li>{" "}
        </ul>{" "}
        <div className="lg:hidden flex items-center mt-3 gap-4">
          <ActiveButton>Get Started</ActiveButton>
        </div>{" "}
      </nav>{" "}
      <div className="mx-3">
        {" "}
        <ActiveButton>Get Started</ActiveButton>
      </div>{" "}
    </header>
  );
};

export default Navbar;
