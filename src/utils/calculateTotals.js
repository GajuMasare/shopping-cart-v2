export const calculateTotals = (items) => {
  let subtotal = 0;
  let savings = 0;

  items.forEach((item) => {
    subtotal += item.price * item.quantity;

    // Example for buy 2 get 1 free for butter
    if (item.name.toLowerCase() === "butter") {
      const freeButter = Math.floor(item.quantity / 3);
      savings += item.price * freeButter; // Save the price of free butter
    }

    // Example for cheese: buy 1 get 1 free
    if (item.name.toLowerCase() === "cheese") {
      const freeCheese = Math.floor(item.quantity / 2); // For every 2 cheeses, 1 is free
      savings += item.price * freeCheese; // Save the price of free cheese
    }
  });

  const total = subtotal - savings;

  return { subtotal, total, savings };
};
