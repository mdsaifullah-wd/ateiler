const getStoredCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem('cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

// Add to Local Storage
const addToLocalStorage = (id) => {
  const shoppingCart = getStoredCart();
  let quantity = shoppingCart[id];
  if (quantity) {
    quantity += 1;
  } else {
    quantity = 1;
  }
  shoppingCart[id] = quantity;
  localStorage.setItem('cart', JSON.stringify(shoppingCart));
};

export { addToLocalStorage, getStoredCart };
