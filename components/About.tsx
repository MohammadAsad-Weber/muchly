import Image from "next/image";

// Images
import Food from "@/public/images/food.png";
import Restaurant from "@/public/images/restaurant.png";
import OrderingFood from "@/public/images/ordering-food.png";

function About() {
  return (
    <section
      id="About"
      className="w-full py-12 px-5 flex flex-col items-center justify-center gap-5 border-t-3 border-white"
    >
      {/* HEADING */}
      <h2 className="text-3xl text-rose-500 font-bold border-b-3 border-rose-500">
        About Us
      </h2>

      {/* GRID LAYOUT */}
      <div className="aspect-video max-w-screen-md w-full grid grid-rows-4 grid-cols-7 gap-2.5">
        <div className="row-start-1 col-start-1 row-end-3 col-end-3 overflow-hidden relative rounded-lg">
          <Image
            src={OrderingFood}
            alt="Ordering food online"
            sizes="auto"
            fill={true}
            className="object-cover object-right"
          />
        </div>
        <div className="row-start-3 col-start-1 -row-end-1 col-end-3 overflow-hidden relative rounded-lg">
          <Image
            src={Restaurant}
            alt="Restaurant"
            sizes="auto"
            fill={true}
            className="object-cover object-center"
          />
        </div>
        <div className="row-start-1 col-start-3 -row-end-1 -col-end-1 overflow-hidden relative rounded-lg">
          <Image
            src={Food}
            alt="Food"
            sizes="auto"
            fill={true}
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* DESCRIPTION */}
      <p className="max-w-screen-sm tracking-wider text-center">
        Munchly is a fast, intuitive, and modern food delivery platform designed
        to bring your favorite meals right to your door. With a sleek interface,
        smart search, personalized recommendations, and real-time tracking, we
        make ordering food effortless—whether you&apos;re craving local flavors,
        gourmet dishes, or popular chains. At Munchly, convenience meets quality
        to deliver a seamless, satisfying, and reliable experience every time
        you order, helping you enjoy great food without the wait.
      </p>
      
    </section>
  );
}

export default About;
