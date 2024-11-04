import { useSelector } from "react-redux";
import CartSummary from "./components/CartSummary";
import ProductList from "./components/ProductList";
import { selectAllProducts } from "../src/features/products/productsSelector";

function App() {
  const products = useSelector(selectAllProducts);
  // console.log(products);
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <section className="flex flex-col md:flex-row  w-[80%] h-[90vh] justify-between">
          <div className="w-full md:w-[35%] bg-white rounded-md shadow-md ">
            <ProductList />
          </div>
          <div className="w-full md:w-[60%] bg-white rounded-md shadow-md mt-2 md:mt-0 overflow-auto">
            <CartSummary />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
