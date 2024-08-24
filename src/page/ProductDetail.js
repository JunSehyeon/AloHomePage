import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import './ProductDetail.css';


const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      let response = await fetch(`https://my-json-server.typicode.com/JunSehyeon/AloHomePage/products/${id}`);
      let data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <Container className="product-detail-container">
      <Row>
        <Col lg={6} className="product-image">
          <img src={product.img} alt={product.title} className="img-fluid" />
        </Col>
        <Col lg={6} className="product-details">
          <h1>{product.title}</h1>
          <h3>{product.price.toLocaleString()} 원</h3>
          <Form>
            <Form.Group controlId="formBasicSize">
              <Form.Label>사이즈 선택</Form.Label>
              <Form.Control as="select">
                {product.size.map((size, index) => (
                  <option key={index} value={size}>{size}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Button variant="dark" type="submit">
              추가
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
