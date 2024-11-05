export const calculateCartSummary = (cartItems) => {
  let subtotal = 0;
  let total = 0;
  let savings = 0;

  const hasSoup = cartItems.some((item) => item.name.toLowerCase() === "soup");

  // Array to hold each product's details, including specific savings
  const itemsWithSavings = cartItems.map((item) => {
    const itemSubtotal = item.price * item.quantity;
    subtotal += itemSubtotal;

    let itemSavings = 0;

    // Calculate specific savings for each item based on conditions
    if (item.name.toLowerCase() === "bread" && hasSoup) {
      itemSavings += (item.price / 2) * item.quantity; // 50% off bread if soup is in the cart
    }

    if (item.name.toLowerCase() === "butter") {
      const discount = item.price / 3; // 33.33% off butter
      itemSavings += discount * item.quantity;
    }

    if (item.name.toLowerCase() === "cheese") {
      const freeCheese = Math.floor(item.quantity / 2);
      itemSavings += item.price * freeCheese; // Buy 1 get 1 free for cheese
    }

    // Update total savings
    savings += itemSavings;

    // Return item data with specific savings and new price, rounding values
    return {
      ...item,
      itemSavings: parseFloat(itemSavings.toFixed(2)),
      newPrice: parseFloat((itemSubtotal - itemSavings).toFixed(2)),
    };
  });

  total = parseFloat((subtotal - savings).toFixed(2));

  return {
    subtotal: parseFloat(subtotal.toFixed(2)),
    total,
    savings: parseFloat(savings.toFixed(2)),
    itemsWithSavings,
  };
};
