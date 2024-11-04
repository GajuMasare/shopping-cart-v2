import React from "react";
import QuntityButton from "./QuntityButton";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity } from "../features/cart/cartSlice";

const CartProductListCom = ({ product, savings }) => {
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

  const originalPrice = product.price * cartItem.quantity;
  const newPrice = originalPrice - savings;
  return (
    <>
      <div className="flex mb-4 justify-between text-sm md:text-lg h-0 ">
        <div>
          <p className="w-12 ">{product.name}</p>
        </div>
        <div className="flex text-left w-10">
          <p>₹{product.price}</p>
        </div>
        <div className="flex">
          <QuntityButton
            quantity={cartItem.quantity}
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
          />
        </div>
      </div>
      <div>
        <div className="text-right flex-row text-xxs md:text-base mb-3">
          <p>
            Price: ₹{product.price}*{product.quantity} = ₹{originalPrice}
          </p>
          <p className="text-red-500">Savings: ₹{savings}</p>
          <p>New Price: ₹{newPrice}</p>
        </div>
      </div>
    </>
  );
};

export default CartProductListCom;
