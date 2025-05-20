import Link from "next/link";
import Image from "next/image";
import FastFood from "@/public/images/fast-food.png";

function Hero() {
  return (
    <section className="w-full py-16 px-5 flex flex-col items-center justify-center gap-14 bg-red-800 md:flex-row md:gap-10">

      {/* IMAGE */}
      <div className="aspect-[960/478] max-w-screen-sm w-full relative animate-float">
        <Image
          src={FastFood}
          alt="Fast Food"
          sizes="auto"
          priority={true}
          fill={true}
          className="object-contain drop-shadow-[0_25px_10px_#000000cc]"
        />
      </div>

      {/* CONTENT */}
      <div className="max-w-lg w-full text-center flex flex-col items-center justify-center gap-2.5 md:text-left md:items-start">
        <h1 className="text-4xl text-white font-extrabold sm:text-5xl md:text-3xl lg:text-5xl">
          Your Hunger
          <br />
          Our Mission
        </h1>
        <p className="tracking-wider text-[#f2f2f2] sm:text-lg md:text-base lg:text-lg">
          Munchly connects you with the best local restaurants for fast,
          reliable food delivery. From everyday favorites to late-night
          cravings, we make ordering effortless — delivering fresh, satisfying
          meals straight to your door, every time.
        </p>
        <Link
          href="/menu"
          className="mt-2.5 py-2.5 px-5 font-semibold bg-yellow-500 cursor-pointer rounded-3xl"
        >
          Order Now
        </Link>
      </div>
      
    </section>
  );
}

export default Hero;
