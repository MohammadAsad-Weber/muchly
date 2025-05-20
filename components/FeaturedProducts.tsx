import Image from "next/image";
import featuredProducts from "@/data/featuredProducts";

function FeaturedItems() {
  return (
    <section className="w-full py-12 px-5 flex flex-col items-center justify-center gap-7.5">

      {/* HEADING */}
      <h2 className="text-3xl text-rose-500 font-bold border-b-3 border-rose-500">
        Featured Products
      </h2>

      {/* FLEXBOX */}
      <div className="max-w-screen-lg w-full flex flex-wrap items-center justify-center gap-3.5">
        {featuredProducts.map((product, index) => {
          return (
            <div
              key={index}
              className="aspect-[3] max-w-md w-full p-2.5 flex items-center justify-start gap-3.5 bg-white rounded-2xl shadow-[0_0_5px_#00000070]"
            >
              {/* Image */}
              <div className="aspect-square h-full w-full overflow-hidden relative rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  sizes="auto"
                  fill={true}
                  className="object-cover object-center"
                />
              </div>
              {/* Details */}
              <div className="flex flex-col gap-1.5">
                <h5 className="font-bold">{product.name}</h5>
                <p className="text-sm">&quot;{product.description}&quot;</p>
              </div>
            </div>
          );
        })}
      </div>
      
    </section>
  );
}

export default FeaturedItems;
