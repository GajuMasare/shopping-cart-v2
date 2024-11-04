import React from "react";
import CartProductListCom from "../layout/CartProductListCom";
import { useSelector } from "react-redux";
import { calculateTotals } from "../utils/calculateTotals";
import { calculateSavings } from "../utils/calculateSavings";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const { subtotal, total, savings } = calculateTotals(cartItems);
  console.log("Cart items:", cartItems);
  return (
    <div className="p-5">
      <div className="text-sm md:text-2xl font-semibold md:font-bold mb-5">
        Summary
      </div>
      {cartItems?.map((product) => {
        const savingsForProduct = calculateSavings(product);
        return (
          <div key={product.id}>
            <CartProductListCom product={product} savings={savingsForProduct} />
            <hr className="border-1 mb-3 bg-gray-400" />
          </div>
        );
      })}

      <div>
        <div className="flex justify-between mt-10">
          Subtotal:<span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-red-500 mt-1 ">
          Saving:₹<span>₹{savings}</span>
        </div>
        <hr className="my-5 border border-gray-600" />
        <div className="flex font-bold justify-between mt-2">
          Total:<span>₹{total}</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
