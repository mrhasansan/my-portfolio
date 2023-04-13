import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Myimg from "../asset/profi.webp";
import { Footer } from "./Footer";
export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <>
      <header className=" bg-white shadow-sm mb-3 flex flex-col lg:flex-row justify-between  fixed top-0 left-0 right-0">
        <div className="flex  justify-between border-b lg:border-b-0 items-center">
          <div className="flex items-center mx-3 ">
            <img src={Myimg} className="w-14 rounded-full bg-slate-100 me-3 " />
            <NavLink to={"/"} className="text-xl font-bold  lg:border-b-0 hover:text-teal-500 ">
              Ma'ruf Hasan
            </NavLink>
          </div>
          <button className="lg:hidden  flex flex-col h-12 w-12 border-2rounded justify-center items-center group mx-3 my-2" onClick={() => setIsOpen(!isOpen)}>
            <div className={`${genericHamburgerLine} ${isOpen ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`} />
            <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
            <div className={`${genericHamburgerLine} ${isOpen ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100" : "opacity-50 group-hover:opacity-100"}`} />
          </button>
        </div>

        <nav className={`${isOpen ? "block" : "hidden"} lg:flex flex-col lg:flex-row items-center justify-center lg:py-0`}>
          <div className="flex flex-col lg:flex-row w-full">
            <NavLink to={"/"} className="block px-4 py-3 lg:py-5 font-bold  hover:text-teal-500 text-right border-b">
              HOME
            </NavLink>
            <NavLink to={"/about"} className="block px-4 py-3 lg:py-5 font-bold hover:text-teal-500 text-right border-b">
              ABOUT
            </NavLink>
            <NavLink to={"/projects"} className="block px-4 py-3 lg:py-5 font-bold hover:text-teal-500 text-right border-b">
              PROJECTS
            </NavLink>
            <NavLink to={"/contact"} className="block px-4 py-3 lg:py-5 font-bold hover:text-teal-500 text-right border-b">
              CONTACT
            </NavLink>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
