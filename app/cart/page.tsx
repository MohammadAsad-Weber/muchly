"use client";

import { useMemo } from "react";
import toast from "react-hot-toast";
import CartCard from "@/components/CartCard";

// Redux
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { clearCart, selectCart } from "@/redux/slices/cartSlice";

// Utility functions
import formatCurrency from "@/utilities/formatCurrency";
import { getCartItemsById } from "@/utilities/getItemsById";

function Cart() {
  // Hooks
  const dispatch = useAppDispatch();
  const cartState = useAppSelector(selectCart);

  // Get the products by Ids
  const items = useMemo(() => {
    if (!cartState) return [];
    return getCartItemsById(cartState);
  }, [cartState]);

  // Get the total amount
  const grandTotal = useMemo(() => {
    if (items.length > 0) {
      const prices = items.map(({ price, quantity }) => price * quantity!);
      return prices.reduce((curr, next) => curr + next);
    } else return 0;
  }, [items]);

  // Checkout handler
  const handleCheckout = () => {
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          dispatch(clearCart());
          resolve(null);
        }, 4500);
      }),
      {
        loading: "Placing your order",
        success: "Order placed",
        error: "Something went wrong",
      }
    );
  };

  return (
    <main className="w-full !py-10 !px-5 flex flex-col items-center justify-center gap-7.5">

      {/* HEADING */}
      <h2 className="text-3xl text-rose-500 font-bold border-b-3 border-rose-500">
        Cart
      </h2>

      {/* CONDITIONAL RENDERING */}
      {items.length > 0 ? (
        <section className="w-full flex flex-col items-center justify-center gap-2.5">
          {items.map(({ id, name, quantity, price, image }) => {
            return (
              <CartCard
                key={id}
                id={id}
                name={name}
                quantity={quantity!}
                price={price}
                image={image}
              />
            );
          })}
        </section>
      ) : (
        <h3 className="text-center text-xl font-bold sm:text-3xl md:text-4xl">
          No items in your cart yet
          <br />
          Start adding to see them here
        </h3>
      )}

      {/* CONDITIONAL RENDERING */}
      {items.length > 0 && (
        <div className="max-w-screen-sm w-full flex flex-col items-center gap-3.5">
          <div className="w-full p-5 text-xl font-semibold underline flex items-center justify-between bg-white rounded-xl shadow-[0_0_5px_#00000080]">
            <span>Grand Total</span>
            <span>{formatCurrency(grandTotal)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full h-14 text-lg text-white font-medium flex items-center justify-center bg-rose-500 cursor-pointer rounded-xl transition-colors hover:bg-rose-600"
          >
            Checkout
          </button>
        </div>
      )}
      
    </main>
  );
}

export default Cart;
