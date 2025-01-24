import headerLogo from "../assets/images/header-logo.svg";
import hamburger from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="padding-x py-8 absolute z-50 w-full">
      <nav className="flex justify-between items-center max-container  ">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1 justify-center gap-16 item-center max-lg:hidden">
          {navLinks.map((navLink, index) => {
            const { href, label } = navLink;
            return (
              <li key={index}>
                <a
                  href={href}
                  className="font-montserrat leading-normal text-lg text-slate-gray"
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className="bg-coral-red text-white px-6 py-3 rounded-lg font-montserrat font-bold max-lg:hidden
        "
        >
          Create Account
        </button>
        <div className="hidden max-lg:block" onClick={toggleMenu}>
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
        {menuOpen && (
          <div
            className={`absolute top-20 left-0 w-full bg-coral-red text-white shadow-lg flex flex-col items-center py-4 space-y-6 max-lg:flex transform transition-all duration-300 ease-in-out ${
              menuOpen
                ? "translate-y-28 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
          >
            <ul className="flex flex-col items-center gap-4">
              {navLinks.map((navLink, index) => {
                const { href, label } = navLink;
                return (
                  <li className="" key={index}>
                    <a
                      href={href}
                      className="font-montserrat leading-normal text-lg text-white"
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <button className="bg-white text-coral-red px-6 py-3 rounded-lg font-montserrat font-bold">
              Create Account
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Nav;
