import React from "react";
import CartProductListCom from "../layout/CartProductListCom";
import { useSelector } from "react-redux";

const CartSummary = () => {
  const cartItems = useSelector((state) => state.cart.items);
  console.log("Cart items:", cartItems);
  return (
    <div className="p-5">
      <div className="text-sm md:text-2xl font-semibold md:font-bold mb-5">
        Summary
      </div>
      {cartItems?.map((product) => (
        <div key={product.id}>
          <CartProductListCom product={product} />
          <hr className="border-1 mb-3 bg-gray-400" />
        </div>
      ))}
    </div>
  );
};

export default CartSummary;
