const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Mock 상품 데이터
const products = [
  { id: 1, name: '노트북', price: 1200000, image: 'https://via.placeholder.com/200?text=Laptop', description: '고성능 노트북' },
  { id: 2, name: '마우스', price: 35000, image: 'https://via.placeholder.com/200?text=Mouse', description: '무선 마우스' },
  { id: 3, name: '키보드', price: 85000, image: 'https://via.placeholder.com/200?text=Keyboard', description: '기계식 키보드' },
  { id: 4, name: '모니터', price: 350000, image: 'https://via.placeholder.com/200?text=Monitor', description: '4K 모니터' },
  { id: 5, name: '헤드폰', price: 150000, image: 'https://via.placeholder.com/200?text=Headphone', description: '무선 헤드폰' },
  { id: 6, name: 'USB 허브', price: 45000, image: 'https://via.placeholder.com/200?text=Hub', description: '7포트 USB 허브' }
];

// 상품 목록 조회
app.get('/api/products', (req, res) => {
  res.json(products);
});

// 상품 상세 조회
app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: '상품을 찾을 수 없습니다' });
  }
  res.json(product);
});

// 주문 처리 (Mock)
app.post('/api/orders', (req, res) => {
  const { items, total } = req.body;
  res.json({
    orderId: Math.floor(Math.random() * 100000),
    items,
    total,
    status: 'completed',
    message: '주문이 완료되었습니다'
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
