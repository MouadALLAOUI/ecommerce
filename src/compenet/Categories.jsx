import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Alert,
  Accordion,
  Modal,
} from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";

// axios.get("https://fakestoreapi.com/products?limit=4")
// http://localhost:3500/posts?_limit=4

function Categories() {
  const [product, setproduct] = useState([]);
  const [Category, setCategory] = useState([]);
  const [panier, setPanier] = useState([]);
  const [showPanier, setShowPanier] = useState(false);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   axios.get("http://localhost:3500/categories").then((res) => {
  //     setCategory(res.data);
  //   });
  // }, []);
  // useEffect(() => {
  //   axios.get("http://localhost:3500/posts").then((res) => {
  //     setproduct(res.data);
  //   });
  // }, []);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCategory(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setproduct(res.data);
    });
  }, []);
  function AddPanier(added) {
    setPanier([...panier, added]);

    return panier;
  }
  const remove = (id) => {
    setPanier(panier.filter((prod) => prod.id !== id));
  };
  return (
    <Container>
      <Button
        style={{ position: "fixed", bottom: "15px", right: "15px" }}
        onClick={() => setShowPanier(!showPanier)}
      >
        Panier
      </Button>
      <Row style={{ margin: "5px" }}>
        <Accordion defaultActiveKey="0">
          {Category.map((caty, key) => {
            return (
              <Row>
                <Accordion.Item eventKey={key}>
                  <Accordion.Header>
                    <Alert
                      className="text-center fs-4 fw-bold text-capitalize"
                      variant="warning"
                    >
                      {caty}
                    </Alert>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row
                      className="justify-content-center"
                      key={key}
                      style={{ margin: "5px", overflow: "auto" }}
                    >
                      {product.map((products) => {
                        if (caty === products.category) {
                          return (
                            <Col>
                              <Card
                                style={{
                                  marginTop: "5px",
                                  maxWidth: "300px",
                                }}
                              >
                                <Card.Img
                                  variant="top"
                                  src={products.image}
                                  style={{
                                    margin: "15px",
                                    height: "150px",
                                    width: "auto",
                                  }}
                                />
                                <Card.Body>
                                  <Card.Title style={{ height: "140px" }}>
                                    <a
                                      href={`/Produitdesc?produit=${products.id}`}
                                    >
                                      {products.title}
                                    </a>
                                  </Card.Title>
                                  <Card.Title style={{ color: "red" }}>
                                    {products.price} $
                                  </Card.Title>
                                  <Card.Text
                                    style={{
                                      height: "160px",
                                      overflow: "auto",
                                    }}
                                  >
                                    description:{products.description}
                                  </Card.Text>
                                  <Button onClick={() => AddPanier(products)}>
                                    Ajouter Panier
                                  </Button>
                                </Card.Body>
                              </Card>
                            </Col>
                          );
                        }
                      })}
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              </Row>
            );
          })}
        </Accordion>
      </Row>
      <Modal show={showPanier}>
        <div className="Panier">
          {panier.map((item, key) => {
            return (
              <div key={key} id={item} className="PanierProduct">
                {product.map((products) => {
                  if (item.id == products.id) {
                    return (
                      <div key={key} className="PanierProduct">
                        <div className="PanierImg">
                          <img src={products.image} />
                        </div>
                        {products.title}
                        {products.price} ${console.log(panier)}
                        <div>
                          <Button onClick={() => remove(item.id)}>
                            delete
                          </Button>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            );
          })}
          <Button onClick={() => setShowPanier(!showPanier)}>close</Button>
        </div>
      </Modal>
    </Container>
  );
}

export default Categories;
