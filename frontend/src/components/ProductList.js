import React from 'react';

function ProductList({ products, onAddToCart }) {
  return (
    <div>
      <h2>상품 목록</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image"
            />
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-description">{product.description}</p>
              <p className="product-price">
                {product.price.toLocaleString('ko-KR')}원
              </p>
              <button 
                className="add-to-cart-btn"
                onClick={() => onAddToCart(product)}
              >
                장바구니 추가
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
