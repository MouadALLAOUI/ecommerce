import { Container, Row, Col, Button, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";

// axios.get("https://fakestoreapi.com/products?limit=4")
// http://localhost:3500/posts?_limit=4

function MyProduit() {
  const [product, setproduct] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3500/posts?_limit=4").then((res) => {
  //     setproduct(res.data);
  //   });
  // }, []);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=4").then((res) => {
      setproduct(res.data);
    });
  }, []);
  return (
    <Container fluid="md">
      <Row style={{ margin: "15px", height: "600px" }}>
        {product.map((products) => {
          return (
            <Col>
              <Card
                style={{
                  marginTop: "5px",
                  height: "80%",
                  overflow: "auto",
                }}
              >
                <Card.Img
                  variant="top"
                  src={products.image}
                  style={{ margin: "15px", height: "120px", width: "auto" }}
                />
                <Card.Body>
                  <Card.Title>{products.title}</Card.Title>
                  <Card.Title>{products.price}</Card.Title>
                  <Card.Text>description:{products.description}</Card.Text>
                  <Card.Text>category:{products.category}</Card.Text>
                  <Button href="/produit">Go to categories</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default MyProduit;
