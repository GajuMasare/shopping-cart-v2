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
      const freeButter = Math.floor(item.quantity / 3);
      itemSavings += item.price * freeButter; // Buy 2 get 1 free for butter
    }

    if (item.name.toLowerCase() === "cheese") {
      const freeCheese = Math.floor(item.quantity / 2);
      itemSavings += item.price * freeCheese; // Buy 1 get 1 free for cheese
    }

    // Update total savings
    savings += itemSavings;

    // Return item data with specific savings and new price
    return {
      ...item,
      itemSavings,
      newPrice: itemSubtotal - itemSavings,
    };
  });

  total = subtotal - savings;

  return { subtotal, total, savings, itemsWithSavings };
};
