import { useEffect, useState } from 'react';
import { addToLocalStorage, getStoredCart } from './useLocalStore';
import useProducts from './useProducts';

const useCart = () => {
  const [cart, setCart] = useState([]);
  let total = 0;
  for (const p of cart) {
    total += p.quantity;
  }
  const { allProducts } = useProducts();
  useEffect(() => {
    const savedCart = [];
    const storedCart = getStoredCart();
    for (const id in storedCart) {
      const addedProduct = allProducts.find((product) => product._id === id);
      const quantity = storedCart[id];
      if (addedProduct) {
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [allProducts]);

  // Handle Add to Cart
  const handleAddToCart = (id, product) => {
    const matched = cart.find((pd) => pd._id === id);
    const rest = cart.filter((pd) => pd._id !== id);
    if (matched) {
      matched.quantity += 1;
      console.log(matched);
      setCart([...rest, matched]);
    } else {
      product.quantity = 1;
      console.log(product);
      setCart([...rest, product]);
    }
    addToLocalStorage(id);
  };
  return { total, cart, handleAddToCart };
};
export default useCart;
