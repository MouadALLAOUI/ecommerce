import React, { useEffect, useState } from "react";
import axios from "axios";
function Produitcomp() {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setproduct(res.data);
    });
  }, []);
  return (
    <div>
      {product.map((products) => {
        if (
          window.location.href ==
          `http://localhost:3000/Produitdesc?produit=${products.id}`
        ) {
          return (
            <div className="text-center">
              <div className="container h-100">
                <div className="row h-100">
                  <div className="col-lg-5 my-auto">
                    <div className="device-container">
                      <div className="device-mockup iphone6_plus portrait white">
                        <div
                          className="device"
                          style={{
                            backgroundImage:
                              "url('iphone_6_plus_white_port.png')",
                          }}
                        >
                          <div className="screen">
                            <img className="img-fluid" src={products.image} />
                          </div>
                          <div className="button"></div>
                        </div>
                      </div>
                    </div>
                    <div className="iphone-mockup"></div>
                  </div>
                  <div className="col-lg-7 my-auto">
                    <div className="mx-auto header-content">
                      <h1 className="alert alert-primary">{products.title}</h1>
                      <h3 className="alert alert-danger">{products.price} $</h3>
                      <p className="alert alert-success">
                        description:{products.description}
                      </p>
                      <p className="alert alert-primary">
                        category:{products.category}
                      </p>
                      <a
                        className="btn btn-outline-warning btn-xl"
                        role="button"
                        href="/produit"
                      >
                        Go to categories
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default Produitcomp;
