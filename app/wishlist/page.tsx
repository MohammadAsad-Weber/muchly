"use client";

import React, { useMemo } from "react";
import WishlistCard from "@/components/WishlistCard";
import { getWishlistItemsById } from "@/utilities/getItemsById";

// Redux
import { useAppSelector } from "@/redux/hooks";
import { selectWishlist } from "@/redux/slices/wishlistSlice";

function Wishlist() {
  // Wishlist State
  const wishlistState = useAppSelector(selectWishlist);

  // Get the products by Ids
  const items = useMemo(() => {
    if (!wishlistState) return [];
    return getWishlistItemsById(wishlistState);
  }, [wishlistState]);

  return (
    <main className="w-full !py-10 !px-5 flex flex-col items-center justify-center gap-5">

      {/* HEADING */}
      <h2 className="text-3xl text-rose-500 font-bold border-b-3 border-rose-500">
        Wishlist
      </h2>

      {/* CONDITIONAL RENDERING */}
      {items.length > 0 ? (
        <section className="max-w-screen-xl w-full p-5 flex flex-wrap items-center justify-center gap-5">
          {items.map(({ id, name, price, rating, image }) => {
            return (
              <WishlistCard
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
        <h3 className="text-center text-xl font-bold sm:text-3xl md:text-4xl">
          No items in your wishlist yet
          <br />
          Start adding to see them here
        </h3>
      )}
      
    </main>
  );
}

export default Wishlist;
