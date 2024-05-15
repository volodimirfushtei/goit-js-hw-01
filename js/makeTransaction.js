function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = 'quantity' * 'pricePerDroid';
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}
