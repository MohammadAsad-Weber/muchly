"use client";

import toast from "react-hot-toast";
import { IoStar } from "react-icons/io5";
import Image, { StaticImageData } from "next/image";
import formatCurrency from "@/utilities/formatCurrency";

// Redux
import { useAppDispatch } from "@/redux/hooks";
import { addToCart } from "@/redux/slices/cartSlice";
import { removeFromWishlist } from "@/redux/slices/wishlistSlice";

// Interface
interface WishlistCardProps {
  id: string;
  name: string;
  price: number;
  rating: number;
  image: StaticImageData;
}
function WishlistCard({ id, name, price, rating, image }: WishlistCardProps) {
  // Dispatch typed hook
  const dispatch = useAppDispatch();

  // Handlers
  const handleRemoveFromWishlist = () => {
    try {
      dispatch(removeFromWishlist(id));
      toast.success("Removed from wishlist");
    } catch {
      toast.error("Something went wrong");
    }
  };
  const handleAddToCart = () => {
    try {
      dispatch(addToCart(id));
      toast.success("Added to cart");
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="aspect-[3/4] max-w-60 w-full p-2.5 flex flex-col items-start justify-evenly gap-2.5 bg-white rounded-2xl shadow-[0_0_8px_#00000060]">

      {/* IMAGE */}
      <div className="aspect-square w-full overflow-hidden relative rounded-2xl">
        <Image
          src={image}
          alt={name}
          sizes="auto"
          fill={true}
          className="object-cover"
        />
      </div>

      {/* TITLE */}
      <h3 className="w-full truncate text-xl font-medium">{name}</h3>

      {/* PRICE & RATING */}
      <div className="w-full flex items-center justify-between gap-3.5 ">
        <h2 className="text-3xl font-bold">{formatCurrency(price)}</h2>
        <p className="flex items-center justify-center gap-1.5">
          {rating}
          <IoStar className="text-[0.95rem] -translate-y-0.5 text-yellow-500" />
        </p>
      </div>

      {/* BUTTONS */}
      <div className="w-full flex items-center justify-center gap-2.5">
        <button
          onClick={handleRemoveFromWishlist}
          className="w-full py-1.5 text-rose-500 font-medium bg-white cursor-pointer border-2 border-rose-500 rounded-xl transition-colors hover:text-rose-600 hover:bg-rose-50 hover:border-rose-600"
        >
          Remove
        </button>
        <button
          onClick={handleAddToCart}
          className="w-full py-1.5 text-white font-medium bg-rose-500 cursor-pointer border-2 border-rose-500 rounded-xl transition-colors hover:bg-rose-600 hover:border-rose-600"
        >
          Cart
        </button>
      </div>

    </div>
  );
}

export default WishlistCard;
