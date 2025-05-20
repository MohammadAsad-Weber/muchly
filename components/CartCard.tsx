"use client";

import toast from "react-hot-toast";
import Image, { StaticImageData } from "next/image";
import formatCurrency from "@/utilities/formatCurrency";

// React-icons
import { IoTrashOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";

// Redux
import { useAppDispatch } from "@/redux/hooks";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/redux/slices/cartSlice";

// Interface
interface CartCardProps {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: StaticImageData;
}
function CartCard({ id, name, quantity, price, image }: CartCardProps) {
  // Dispatch typed hook
  const dispatch = useAppDispatch();

  // handlers
  const handleRemoveFromCart = () => {
    try {
      dispatch(removeFromCart(id));
      toast.success("Removed from cart");
    } catch {
      toast.error("Something went wrong");
    }
  };
  const handleDecreaseQuantity = () => {
    dispatch(decreaseQuantity(id));
  };
  const handleIncreaseQuantity = () => {
    dispatch(increaseQuantity(id));
  };

  return (
    <div className="max-w-screen-sm w-full overflow-hidden flex flex-col bg-white rounded-2xl shadow-[0_0_5px_#00000060] sm:flex-row">

      {/* IMAGE */}
      <div className="h-40 w-full relative sm:h-auto sm:w-40 shrink-0">
        <Image
          src={image}
          alt={name}
          fill={true}
          className="object-cover object-center"
        />
      </div>

      {/* CONTENT */}
      <div className="flex grow flex-col p-3.5">

        {/* Detail & Remove button */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2.5">
          <div>
            <h3 className="font-medium">{name}</h3>
            <p className="text-xl text-rose-500 font-semibold mt-1.5">
              {formatCurrency(price)}
            </p>
          </div>
          <button
            onClick={handleRemoveFromCart}
            className="aspect-square h-8 text-[1.25rem] text-rose-500 flex items-center justify-center cursor-pointer rounded-full self-end transition-colors hover:text-rose-600 hover:bg-rose-50 sm:self-start"
          >
            <IoTrashOutline />
          </button>
        </div>

        {/* Quantity handlers & Total price */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="flex items-center border border-gray-200 rounded-md">
            <button
              onClick={handleDecreaseQuantity}
              className="aspect-square h-8 text-base text-rose-500 flex items-center justify-center cursor-pointer transition-colors hover:text-rose-600 hover:bg-rose-50"
            >
              <FaMinus />
            </button>
            <span className="w-10 text-center">{quantity}</span>
            <button
              onClick={handleIncreaseQuantity}
              className="aspect-square h-8 text-base text-rose-500 flex items-center justify-center cursor-pointer transition-colors hover:text-rose-600 hover:bg-rose-50"
            >
              <FaPlus />
            </button>
          </div>
          <p className="font-semibold">
            Total: {formatCurrency(price * quantity)}
          </p>
        </div>
        
      </div>

    </div>
  );
}

export default CartCard;
