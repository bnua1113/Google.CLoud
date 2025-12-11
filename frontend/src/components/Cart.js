import React from 'react';

function Cart({ items, onRemove, onUpdateQuantity, onCheckout }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (items.length === 0) {
    return (
      <div className="cart-container">
        <div className="cart-empty">
          <h2>장바구니가 비어있습니다</h2>
          <p>상품을 추가해주세요</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>장바구니</h2>
      <div className="cart-items">
        {items.map(item => (
          <div key={item.id} className="cart-item">
            <div className="cart-item-info">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">
                {item.price.toLocaleString('ko-KR')}원
              </div>
            </div>
            <div className="quantity-control">
              <button 
                className="quantity-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button 
                className="quantity-btn"
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <div style={{ minWidth: '100px', textAlign: 'right', marginRight: '15px' }}>
              <div style={{ fontWeight: 'bold', color: '#e74c3c' }}>
                {(item.price * item.quantity).toLocaleString('ko-KR')}원
              </div>
            </div>
            <button 
              className="remove-btn"
              onClick={() => onRemove(item.id)}
            >
              삭제
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="summary-row">
          <span>상품 수:</span>
          <span>{items.reduce((sum, item) => sum + item.quantity, 0)}개</span>
        </div>
        <div className="summary-row total">
          <span>총액:</span>
          <span>{total.toLocaleString('ko-KR')}원</span>
        </div>
      </div>

      <button 
        className="checkout-btn"
        onClick={onCheckout}
      >
        주문하기
      </button>
    </div>
  );
}

export default Cart;
