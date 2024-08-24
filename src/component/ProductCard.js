import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductCard.css'; // CSS 파일 import (이 파일에 위 CSS를 추가하세요)

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };

  return (
    <div className='card' onClick={showDetail}>
      <img src={item?.img} alt={item?.title} />
      {item?.choice && <div className='choice'>Concious choice</div>}
      <div>{item?.title}</div>
      <div className='price'>{item?.price}</div>
      {item?.new && <div className='new'>NEW</div>}
    </div>
  );
};

export default ProductCard;
