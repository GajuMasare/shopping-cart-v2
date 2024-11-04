import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../features/cart/cartSlice";

const ProductListCom = ({ product }) => {
  const [showOffers, setShowOffers] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  const toggleOffers = (e) => {
    e.preventDefault();
    setShowOffers((prev) => !prev);
  };

  return (
    <div>
      <div className="flex text-sm md:text-lg justify-between items-center text-center">
        <div className="flex items-center text-center">
          <p>{product.name}</p>
          <div className="text-xs ml-2">
            {product.offer && !showOffers ? (
              <a
                href="#"
                onClick={toggleOffers}
                className="text-blue-500 hover:underline"
              >
                Offer
              </a>
            ) : (
              showOffers && <p className="text-gray-600">{product.offer}</p>
            )}
          </div>
        </div>
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
      <hr className="my-3 bg-gray-600 border-1" />
    </div>
  );
};

export default ProductListCom;
