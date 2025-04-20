"use client";

import React, { useState } from "react";
import logo from "./assets/logo.png";
import Image from "next/image";
import moon from "./assets/icon-moon.png";
import sun from "./assets/icon-sun.png";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(moon);

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-black dark:border-gray-700 rounded-xl">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Image
                  priority
                  className="h-6 w-25"
                  width={100}
                  height={32}
                  src={logo}
                  alt="Logo"
                />
              </div>
            </div>
            {/* <div className="md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Image
                  priority
                  width={100}
                  height={32}
                  src={darkMode}
                  className="h-4 w-4"
                  alt="Moon"
                  onClick={() => {
                    if (darkMode === moon) {
                      setDarkMode(sun);
                      document.body.classList.add("dark");
                      document.body.classList.add("bg-white");
                      document.body.classList.remove("bg-black");
                    } else {
                      setDarkMode(moon);
                      document.body.classList.remove("dark");
                      document.body.classList.add("bg-black");
                    }
                    console.log(darkMode);
                  }}
                />
              </div>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
