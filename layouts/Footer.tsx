import Link from "next/link";

// React-icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  // Get the current year
  const year = new Date().getFullYear();

  return (
    <footer className="w-full text-white bg-rose-500">
      
      {/* CONTENT */}
      <div className="w-full py-12 px-5 text-center flex flex-col items-center justify-center gap-2.5">
        <h2 className="text-4xl font-bold text-transparent bg-[linear-gradient(180deg,_#ffffff_0%,_#e6e6e6_50%,_transparent_100%)] bg-clip-text sm:text-5xl">
          Fuel Your Cravings
        </h2>
        <p className="max-w-screen-sm tracking-wider sm:text-lg">
          Munchly brings your favorite meals to your doorstep with speed,
          reliability, and a seamless user experience. Whether you&apos;re
          craving comfort food or discovering new flavors, we connect you with
          top local restaurants and trusted delivery partners. Built for
          convenience, optimized for performance—Munchly makes food delivery
          smarter.
        </p>
      </div>

      {/* SOCIAL MEDIA LINKS & COPYRIGHT */}
      <div className="w-full p-7.5 flex flex-col items-center justify-center gap-5 border-t-2 border-rose-300">
        <div className="w-fit text-5xl flex items-center justify-center gap-3.5">
          <Link
            href="https://www.instagram.com/asad.lifts059/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </Link>
          <Link
            href="https://x.com/IronCodeNagi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter />
          </Link>
          <Link
            href="https://www.linkedin.com/in/mohammad-asad-091b6a217/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/MohammadAsad-Weber"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
        </div>
        <p className="w-fit tracking-widest text-sm">
          © {year} Munchly. All rights reserved.
          <br />
          Delivering delight, one meal at a time.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
