import React, { useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div>
      <div className="flex justify-between flex-col lg:flex-row">
        <div className="flex justify-between items-center px-4 py-4 lg:py-0 border-b lg:border-b-0">
          <div>
            <a href="/" className="font-semibold uppercase text-white">
              agus
            </a>
          </div>
          <div>
            <button
              onClick={() => setIsMobile(!isMobile)}
              className="focus:outline-none text-white block lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  className={!isMobile ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
                <path
                  className={isMobile ? 'block' : 'hidden'}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          className={`${isMobile ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row py-4 lg:py-0`}
        >
          <a
            href="#"
            className="block uppercase px-4 py-3 lg:py-5 text-white hover:text-gray-500"
          >
            about
          </a>
          <a
            href="#"
            className="block uppercase px-4 py-3 lg:py-5 text-white hover:text-gray-500"
          >
            experience
          </a>
          <a
            href="#"
            className="block uppercase px-4 py-3 lg:py-5 text-white hover:text-gray-500"
          >
            works
          </a>
          <a
            href="#"
            className="block uppercase px-4 py-3 lg:py-5 text-white hover:text-gray-500"
          >
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
