import CartSummary from "./components/CartSummary";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Billing App</h1>
        <ProductList />
        <CartSummary />
      </div>
    </>
  );
}

export default App;
