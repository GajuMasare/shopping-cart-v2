export const calculateSavings = (item) => {
  let savings = 0;

  // Example logic for savings
  if (item.name.toLowerCase() === "soup" && item.quantity > 0) {
    savings += (item.price / 2) * item.quantity; // Assume half-price bread with soup
  }

  // Example for buy 2 get 1 free for butter
  if (item.name.toLowerCase() === "butter") {
    const freeButter = Math.floor(item.quantity / 2);
    savings += item.price * freeButter; // Save the price of free butter
  }

  // Example for cheese: buy 1 get 1 free
  if (item.name.toLowerCase() === "cheese") {
    const freeCheese = Math.floor(item.quantity / 2); // For every 2 cheeses, 1 is free
    savings += item.price * freeCheese; // Save the price of free cheese
  }

  return savings;
};
