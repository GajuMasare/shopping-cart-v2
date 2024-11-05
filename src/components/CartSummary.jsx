import React from "react";
import CartProductListCom from "../layout/CartProductListCom";
import { useSelector } from "react-redux";
import { calculateCartSummary } from "../utils/calculateCartSummary";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const { subtotal, total, savings, itemsWithSavings } =
    calculateCartSummary(cartItems);

  console.log("Cart items with savings:", itemsWithSavings);

  return (
    <div className="p-5">
      <div className="text-sm md:text-2xl font-semibold md:font-bold mb-5">
        Summary
      </div>
      {itemsWithSavings && itemsWithSavings.length > 0 ? (
        itemsWithSavings.map((product) => (
          <div key={product.id}>
            <CartProductListCom
              product={product}
              savings={product.itemSavings}
              newPrice={product.newPrice}
            />
            <hr className="border-1 mb-3 bg-gray-400" />
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      )}

      <div>
        <div className="flex justify-between mt-10">
          Subtotal: <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-red-500 mt-1 ">
          Savings: <span>₹{savings}</span>
        </div>
        <hr className="my-5 border border-gray-600" />
        <div className="flex font-bold justify-between mt-2">
          Total: <span>₹{total}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
