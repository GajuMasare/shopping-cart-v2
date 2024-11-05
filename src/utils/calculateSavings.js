export const calculateSavings = (item) => {
  let savings = 0;

  if (!item || typeof item !== "object") {
    return savings; // Return 0 savings if item is not valid
  }

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

  return savings;
};
