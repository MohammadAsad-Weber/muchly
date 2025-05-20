"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// React-icons
import { BsBuildings } from "react-icons/bs";
import { RiMenu3Line } from "react-icons/ri";
import { RiHeart3Line } from "react-icons/ri";
import { IoHomeOutline } from "react-icons/io5";
import { IoBookOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoPaperPlaneOutline } from "react-icons/io5";

function Navbar() {
  // State to toggle hamburger menu
  const [toggle, setToggle] = useState(false);

  // Hide the hamburger menu while resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="w-full h-20 sticky top-0 z-30 flex items-center justify-center bg-white shadow-lg">

      {/* NAVBAR */}
      <nav className="max-w-screen-xl w-full h-full px-5 flex items-center justify-between">

        {/* TITLE or LOGO */}
        <h3 className="text-3xl text-rose-500 font-semibold">Munchly</h3>

        {/* LINKS FOR SCREEN LARGER THAN 640px */}
        <div className="font-medium hidden items-center justify-center gap-5 sm:flex">
          <Link href="/" className="transition-colors hover:text-rose-500 hover:underline">
            Home
          </Link>
          <Link href="/menu" className="transition-colors hover:text-rose-500 hover:underline">
            Menu
          </Link>
          <Link href="/#About" className="transition-colors hover:text-rose-500 hover:underline">
            About Us
          </Link>
          <Link href="/#Contact" className="transition-colors hover:text-rose-500 hover:underline">
            Contact Us
          </Link>
        </div>

        {/* LINKS & BUTTON */}
        <div className="flex items-center justify-center gap-5">
          <Link 
            href="/wishlist" 
            className="transition-colors hover:text-rose-500"
          >
            <RiHeart3Line size="1.5rem" />
          </Link>
          <Link 
            href="/cart" 
            className="transition-colors hover:text-rose-500"
          >
            <RiShoppingBag4Line size="1.5rem" />
          </Link>
          <button
            onClick={() => setToggle((val) => !val)}
            className="cursor-pointer transition-colors hover:text-rose-500 sm:hidden"
          >
            <RiMenu3Line size="1.5rem" />
          </button>
        </div>

      </nav>

      {/* HAMBURGER MENU */}
      <div
        style={toggle ? { display: "flex" } : { display: "none" }}
        className="max-w-80 w-full p-2.5 absolute right-3.5 top-12/10 flex flex-col items-center justify-center gap-1.5 bg-white rounded-2xl"
      >
        <Link
          href="/"
          className="w-full py-2.5 px-3.5 font-medium flex items-center justify-start gap-2.5 bg-[#f3f3f3] rounded-lg transition-all hover:bg-rose-500 hover:text-white"
        >
          <IoHomeOutline size="1.25rem" />
          Home
        </Link>
        <Link
          href="/menu"
          className="w-full py-2.5 px-3.5 font-medium flex items-center justify-start gap-2.5 bg-[#f3f3f3] rounded-lg transition-all hover:bg-rose-500 hover:text-white"
        >
          <IoBookOutline size="1.25rem" />
          Menu
        </Link>
        <Link
          href="/#About"
          className="w-full py-2.5 px-3.5 font-medium flex items-center justify-start gap-2.5 bg-[#f3f3f3] rounded-lg transition-all hover:bg-rose-500 hover:text-white"
        >
          <BsBuildings size="1.25rem" />
          About Us
        </Link>
        <Link
          href="/#Contact"
          className="w-full py-2.5 px-3.5 font-medium flex items-center justify-start gap-2.5 bg-[#f3f3f3] rounded-lg transition-all hover:bg-rose-500 hover:text-white"
        >
          <IoPaperPlaneOutline size="1.25rem" />
          Contact Us
        </Link>
      </div>
      
    </header>
  );
}

export default Navbar;
