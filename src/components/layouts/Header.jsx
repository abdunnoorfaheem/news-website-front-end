import React, { useState } from "react";
import Container from "../Container";
import Image from "../Image";
import Logo from "/src/assets/newsLogo.png";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Header = () => {
  const [open, setOpen] = useState(false);

  const today = new Date();
  const dateFormat = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section>
      <Container>
        <div className="flex items-center justify-between font-merriweather px-5 md:px-0">
          {/* News Logo */}
          <div className="py-4">
            <Link to={"/"}><Image imgSrc={Logo} imgAlt="logo" className="h-22 w-auto" /></Link>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-x-8 text-[15px] font-medium">
            <li><Link className="hover:text-blue-600">Home</Link></li>
            <li><Link className="hover:text-blue-600">National</Link></li>
            <li><Link className="hover:text-blue-600">International</Link></li>
            <li><Link className="hover:text-blue-600">Sports</Link></li>
            <li><Link className="hover:text-blue-600">Technology</Link></li>
            <li><Link className="hover:text-blue-600">Latest News</Link></li>
          </ul>
          {/*  Icons start */}
          <div className="hidden md:flex items-center gap-x-4">
            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border rounded-full pl-4 pr-10 py-1 text-sm outline-none focus:border-blue-500"
              />
              <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-blue-500 cursor-pointer" />
            </div>
            {/* Date show */}
            <span className="text-sm text-gray-600">
              {dateFormat}
            </span>
          </div>
          {/* icon end */}
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            {open ? <ImCross /> : <FaBars />}
          </button>
        </div>
        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden mt-4 space-y-4 text-center pb-4 text-[15px] font-medium">
            <li className="hover:text-blue-600"><Link onClick={() => setOpen(false)}>Home</Link></li>
            <li className="hover:text-blue-600"><Link onClick={() => setOpen(false)}>National</Link></li>
            <li className="hover:text-blue-600"><Link onClick={() => setOpen(false)}>International</Link></li>
            <li className="hover:text-blue-600"><Link onClick={() => setOpen(false)}>Sports</Link></li>
            <li className="hover:text-blue-600"><Link onClick={() => setOpen(false)}>Technology</Link></li>
            <li className="hover:text-blue-600"><Link onClick={() => setOpen(false)}>Latest News</Link></li>
          </ul>
        )}

      </Container>
    </section>
  );
};

export default Header;
