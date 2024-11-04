import React from "react";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../features/products/productsSelector";
import ProductListCom from "../layout/ProductListCom";

const ProductList = () => {
  const products = useSelector(selectAllProducts);
  const cartItems = useSelector((state) => state.cart.items);
  console.log("Cart items:", cartItems);

  return (
    <div className="p-5">
      <div className="text-sm md:text-2xl font-semibold md:font-bold mb-5">
        Products
      </div>
      {products.map((product) => (
        <div key={product.id}>
          <ProductListCom product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
