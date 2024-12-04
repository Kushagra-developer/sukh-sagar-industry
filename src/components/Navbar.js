"use client";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation"; 
import { useTheme } from "next-themes";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("/");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbar = useRef();
  const router = useRouter(); 

  useEffect(() => {
    setMounted(true);
    window.onscroll = () => {
      if (window.pageYOffset >= 200) {
        navbar.current.classList.add("shadow");
      } else {
        navbar.current.classList.remove("shadow");
      }
    };
  }, []);

  const handleHomeClick = () => {
    setSelectedItem("home");
    router.push("/"); 
  };

  return (
    <div
      ref={navbar}
      className={`${
        theme === "dark" ? "bg-[#121212]" : "bg-white text-black"
      } w-full z-50 fixed top-0 left-0 py-4`}
    >
      <div className="container px-5 md:px-16 flex items-center justify-between mx-auto">
        <Link href={"/"} passHref className="flex items-center gap-3">
          <img src="/Image1.png" alt="Logo" className="w-20 h-20" />
          <h2 className="text-xl sm:text-3xl font-bold">
            <span className="text-rose-600">SUKH SAGAR </span>Industries
          </h2>
        </Link>
        <div>
          <ul
            className={`${toggleMenu ? "left-0" : "-left-full"} ${
              theme === "dark"
                ? "bg-[#121212] text-white"
                : "bg-white text-black"
            } fixed top-0 z-50 w-4/5 h-full overflow-y-auto transition-all duration-500 p-8 flex flex-col gap-6 shadow-lg md:static md:flex md:flex-row md:items-center md:justify-end md:w-auto md:h-auto md:p-0 md:shadow-none`}
          >
            <button
              className={`${
                theme === "dark" ? "text-white" : "text-black"
              } md:hidden absolute top-4 right-5`}
              onClick={() => setToggleMenu(false)}
            >
              <CloseOutlinedIcon />
            </button>
            {[
              { name: "home", action: handleHomeClick },
              { name: "about", path: "/Founder" },
              { name: "features", path: "#features" },
              { name: "contact", path: "/products" },
              { name: "certifications", path: "/certificates" },
              { name: "contact", path: "/contact" },
              
            ].map((link) => (
              <li
                key={link.name}
                className={`${
                  selectedItem === link.name ? "text-rose-600" : ""
                } capitalize py-2 border-b border-neutral-300 md:border-none hover:text-rose-600`}
                onClick={() =>
                  link.action ? link.action() : setSelectedItem(link.name)
                }
              >
                {link.path ? (
                  <Link href={link.path} passHref>
                    {link.name}
                  </Link>
                ) : (
                  <span className="cursor-pointer">{link.name}</span>
                )}
              </li>
            ))}
            <div className="md:hidden flex justify-center gap-4 mt-4">
              <Link href="https://www.facebook.com/profile.php?id=61569951479357" target="_blank">
                <FacebookOutlinedIcon className="text-xl hover:text-rose-600" />
              </Link>
              <Link href="https://www.instagram.com/sukhsagarindustries/" target="_blank">
                <InstagramIcon className="text-xl hover:text-rose-600" />
              </Link>
            </div>
          </ul>
        </div>

        <div className="flex items-center gap-3">
          <button>
            {theme === "dark" ? (
              <LightModeRoundedIcon
                onClick={() => setTheme("light")}
                className="text-white"
              />
            ) : (
              <DarkModeOutlinedIcon onClick={() => setTheme("dark")} />
            )}
          </button>
          <button
            aria-label="menu"
            className={`${
              theme === "dark" ? "text-white" : "text-black"
            } md:hidden`}
            onClick={() => setToggleMenu(true)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
