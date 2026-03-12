import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { logo_tanish as logo, menu, close } from "../assets";
import { NAV_LINKS, SOCIALS } from "../constants";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Navbar
export const Navbar = () => {
  // state variables
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 z-20 w-fit max-w-[90vw] transition-all duration-500 ease-in-out px-2 py-2",
        isAtBottom 
          ? "right-4 left-auto translate-x-0" 
          : "left-1/2 -translate-x-1/2"
      )}
    >
      <div className="flex items-center justify-center glass-nav rounded-full px-6 py-2 gap-4">
        {/* Logo - Reduced size for pill */}
        <Link
          to="/"
          className="flex items-center gap-2 mr-4"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="Logo" className="w-8 h-8 object-contain" />
        </Link>

        {/* Nav Links (Desktop) */}
        <ul className="list-none hidden sm:flex flex-row items-center gap-2">
          {NAV_LINKS.map((link) => (
            <li
              key={link.id}
              className={cn(
                active === link.title ? "text-white nav-pill-active" : "text-secondary",
                "hover:text-white text-[16px] font-medium cursor-pointer nav-pill px-4 py-1.5"
              )}
              onClick={() => !link.link && setActive(link.title)}
            >
              {link.link ? (
                <a href={link.link} target="_blank" rel="noreferrer noopener">
                  {link.title}
                </a>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger Menu (Mobile) - Keep it simple inside pill */}
        <div className="sm:hidden flex items-center ml-2">
          <img
            src={toggle ? close : menu}
            alt="Menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={cn(
              !toggle ? "hidden" : "flex",
              "p-6 glass-nav absolute top-16 right-0 mx-2 my-2 min-w-[140px] z-10 rounded-2xl flex-col gap-4 animate-in fade-in slide-in-from-top-4"
            )}
          >
            {/* Nav Links (Mobile) */}
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <li
                  key={link.id}
                  className={cn(
                    active === link.title ? "text-white bg-white/10" : "text-secondary",
                    "font-poppins font-medium cursor-pointer text-[16px] w-full px-3 py-1 rounded-lg"
                  )}
                  onClick={() => {
                    !link.link && setToggle(!toggle);
                    !link.link && setActive(link.title);
                  }}
                >
                  {link.link ? (
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {link.title}
                    </a>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
                </li>
              ))}
            </ul>
            
            {/* Social Links (Mobile Menu) */}
            <div className="flex gap-4 mt-2 pt-4 border-t border-white/10 w-full justify-center">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="opacity-70 hover:opacity-100 transition"
                >
                  <img src={social.icon} alt={social.name} className="w-6 h-6 object-contain" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
