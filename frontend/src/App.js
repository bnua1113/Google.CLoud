import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/products');
      setProducts(response.data);
      setLoading(false);
    } catch (error) {
      console.error('상품 로드 실패:', error);
      setLoading(false);
    }
  };

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const handleCheckout = async () => {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    try {
      await axios.post('http://localhost:5000/api/orders', {
        items: cart,
        total
      });
      alert('주문이 완료되었습니다!');
      setCart([]);
      setShowCart(false);
    } catch (error) {
      console.error('주문 실패:', error);
      alert('주문 처리 중 오류가 발생했습니다');
    }
  };

  return (
    <div className="App">
      <header className="header">
        <h1>🛍️ 쇼핑몰</h1>
        <button 
          className="cart-button"
          onClick={() => setShowCart(!showCart)}
        >
          🛒 장바구니 ({cart.length})
        </button>
      </header>

      <main className="main">
        {showCart ? (
          <Cart 
            items={cart}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onCheckout={handleCheckout}
          />
        ) : (
          <>
            {loading ? (
              <p>로딩 중...</p>
            ) : (
              <ProductList 
                products={products}
                onAddToCart={addToCart}
              />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
