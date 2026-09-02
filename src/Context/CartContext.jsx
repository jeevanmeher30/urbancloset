import { createContext, useState, useEffect } from 'react'

  export const CartContext = createContext();

  export const CartProvider = ({ children }) => {

    const [cart , setCart] = useState(() => {
      const savedcart = localStorage.getItem("cart");

      return savedcart ? JSON.parse(savedcart) : [];
    });

    useEffect(() =>{
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) =>{

      const existingProduct = cart.find(
        (item) => item.id === product.id &&
        item.selectedSize === product.selectedSize
      );
      if(existingProduct) {
        setCart(
          cart.map((item) => 
          item.id === product.id && 
          item.selectedSize === product.selectedSize
          ? { ...item, quantity: item.quantity + 1}
          :item
          )
        );
      } else{
        setCart([
          ...cart,
          {...product,quantity: 1 }
        ]);
      }
    };

    const increaseQuantity = (id, selectedSize) => {
        setCart(
          cart.map((item) => 
            item.id === id &&
            item.selectedSize === selectedSize
              ? { ...item, quantity: item.quantity + 1}
              :item
          )
        );
      };

    const decreaseQuantity = (id, selectedSize) => {
        setCart(
          cart.map((item) => 
            item.id === id && 
            item.selectedSize === selectedSize &&
            item.quantity > 1
              ? { ...item, quantity: item.quantity - 1}
              :item
          )
        );
      };

    const removeFromCart = (id) => {

      setCart(
        cart.filter((item) => item.id !== id)
      );
    };

    const  clearCart = () =>{
      setCart([]);
    };

    return (
          <CartContext.Provider value = {{ 
            cart, 
            setCart, 
            addToCart, 
            increaseQuantity, 
            decreaseQuantity,
            removeFromCart,
            clearCart
            }}>
            {children}
          </CartContext.Provider>
  )
}
  

