"use client";

import Image from "next/image";
import menu from "@/data/menu";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { useEffect, useMemo, useState } from "react";

function Menu() {
  // Hooks
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("pizzas");

  // set the searchParams value
  useEffect(() => {
    const category = searchParams.get("category");
    if (category) setSelectedCategory(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Display products by selected category
  const items = useMemo(() => {
    if (!selectedCategory) return [];
    const categoryData = menu.find(({ slug }) => slug === selectedCategory);
    return categoryData ? categoryData.items : [];
  }, [selectedCategory]);

  return (
    <main className="w-full flex items-start justify-start">

      {/* CATEGORY SIDEBAR */}
      <aside
        style={{ scrollbarWidth: "none" }}
        className="max-h-[calc(100dvh_-_5rem)] h-full max-w-44 w-3/10 overflow-y-auto grid grid-cols-1 items-center justify-center"
      >
        {menu.map(({ id, slug, image, category }) => {
          return (
            <button
              key={id}
              onClick={() => setSelectedCategory(slug)}
              style={selectedCategory === slug ? { background: "#ffccd3" } : { background: "#ffffff" }}
              className="aspect-square w-full p-3.5 flex flex-col items-center justify-center gap-2.5 bg-rose-200 cursor-pointer border border-gray-400 transition-colors"
            >
              {/* Image */}
              <div className="aspect-square w-full relative">
                <Image
                  src={image}
                  alt={category}
                  sizes="auto"
                  fill={true}
                  className="object-contain drop-shadow-[0_5px_5px_#000000a9]"
                />
              </div>
              {/* Title */}
              <h5 className="font-semibold">{category}</h5>
            </button>
          );
        })}
      </aside>

      {/* CONDITIONAL RENDERING */}
      {items.length > 0 ? (
        <section
          style={{ scrollbarWidth: "none" }}
          className="max-h-[calc(100dvh_-_5rem)] h-full w-full overflow-y-auto p-5 flex flex-wrap items-center justify-center gap-5"
        >
          {items.map(({ id, name, price, rating, image }) => {
            return (
              <ProductCard
                key={id}
                id={id}
                name={name}
                price={price}
                rating={rating}
                image={image}
              />
            );
          })}
        </section>
      ) : (
        <h3 className="w-full pt-12 p-5 text-center text-2xl font-semibold sm:text-3xl md:text-4xl">
          Select a category to view available items
        </h3>
      )}
      
    </main>
  );
}

export default Menu;
