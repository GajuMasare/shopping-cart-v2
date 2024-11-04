import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../features/cart/cartSlice";

const ProductListCom = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div>
      <div className="flex text-sm md:text-lg justify-between items-center text-center  ">
        <div>{product.name}</div>
        <div className="flex items-center text-center">
          <div>₹{product.price}</div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-4 rounded-md ml-3"
            onClick={handleAddToCart}
          >
            Add
          </button>
        </div>
      </div>
      <hr className=" my-3 bg-gray-600 border-1 " />
    </div>
  );
};

export default ProductListCom;
