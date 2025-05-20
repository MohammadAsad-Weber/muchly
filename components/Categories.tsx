import Link from "next/link";
import menu from "@/data/menu";
import Image from "next/image";

function Categories() {
  return (
    <section className="w-full py-12 px-5 flex flex-col items-center justify-center gap-7.5 border-t-3 border-white">
      
      {/* HEADING */}
      <h2 className="text-3xl text-rose-500 font-bold border-b-3 border-rose-500">
        Categories
      </h2>

      {/* FLEXBOX */}
      <div className="max-w-screen-md w-full flex flex-wrap items-center justify-center gap-5">
        {menu.map(({ id, slug, image, category }) => {
          return (
            <Link
              key={id}
              href={`/menu?category=${slug}`}
              className="max-w-36 w-full py-3.5 px-5 text-center flex flex-col items-center justify-center gap-2.5 bg-white rounded-2xl shadow-[0_0_5px_#00000050] transition-all hover:-translate-y-1.5 sm:max-w-40 md:max-w-44"
            >
              {/* Image */}
              <div className="aspect-square w-full relative">
                <Image
                  src={image}
                  alt={category}
                  sizes="auto"
                  fill={true}
                  className="object-contain drop-shadow-[0_5px_5px_#000000c0]"
                />
              </div>
              {/* Title */}
              <h6 className="font-semibold">{category}</h6>
            </Link>
          );
        })}
      </div>

    </section>
  );
}

export default Categories;
