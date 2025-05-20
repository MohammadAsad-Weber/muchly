import Link from "next/link";

// React-icons
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

function Contact() {
  return (
    <section
      id="Contact"
      className="w-full py-12 px-5 flex flex-col items-center justify-center gap-7.5 border-t-3 border-white"
    >
      {/* HEADING */}
      <h2 className="text-3xl text-rose-500 font-bold border-b-3 border-rose-500">
        Contact Us
      </h2>

      {/* GRID BOX */}
      <div className="w-fit grid grid-cols-1 items-center justify-center gap-5 sm:grid-cols-2 xl:grid-cols-4">
        
        {/* Email */}
        <Link
          href="mailto:mohdasad69690@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-video max-w-72 w-full p-5 text-center flex flex-col items-center justify-center gap-2.5 bg-white rounded-2xl shadow-[0_0_5px_#00000080]"
        >
          <MdEmail className="text-5xl text-rose-500" />
          <h4 className="text-xl font-medium">mohdasad69690@gmail.com</h4>
        </Link>

        {/* Phone */}
        <Link
          href="tel:+91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-video max-w-72 w-full p-5 text-center flex flex-col items-center justify-center gap-2.5 bg-white rounded-2xl shadow-[0_0_5px_#00000080]"
        >
          <IoMdCall className="text-5xl text-rose-500" />
          <h4 className="text-xl font-medium">+91 XXXXX XXXXX</h4>
        </Link>

        {/* Address */}
        <div className="aspect-video max-w-72 w-full p-5 text-center flex flex-col items-center justify-center gap-2.5 bg-white rounded-2xl shadow-[0_0_5px_#00000080]">
          <FaMapLocationDot className="text-5xl text-rose-500" />
          <h4 className="text-xl font-medium">
            Orion Towers, Sector 62, Noida, UP
          </h4>
        </div>

        {/* Website */}
        <Link
          href="https://munchly-flame.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-video max-w-72 w-full p-5 text-center flex flex-col items-center justify-center gap-2.5 bg-white rounded-2xl shadow-[0_0_5px_#00000080]"
        >
          <FaGlobeAmericas className="text-5xl text-rose-500" />
          <h4 className="text-xl font-medium">https://www.munchly.in</h4>
        </Link>
        
      </div>

    </section>
  );
}

export default Contact;
