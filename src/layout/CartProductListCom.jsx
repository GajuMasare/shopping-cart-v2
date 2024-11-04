import React from "react";
import QuntityButton from "./QuntityButton";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../features/cart/cartSlice";

const CartProductListCom = ({ product }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.items.find((item) => item.id === product.id)
  );

  const handleIncrease = () => {
    dispatch(increaseQuantity(product.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(product.id));
  };
  return (
    <div className="flex items-center mb-4 justify-between text-xs md:text-sm">
      <div>
        <p className="w-12 text-center">{product.name}</p>
      </div>
      <div>
        <p>₹{product.price}</p>
      </div>
      <div className="flex justify-center items-center">
        <QuntityButton
          quantity={cartItem.quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      </div>
    </div>
  );
};

export default CartProductListCom;
