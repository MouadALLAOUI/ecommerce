import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
export default function Panier(props) {
  const [panier, setPanier] = useState([]);
  const [items, setItems] = useState([]);
  function AddPanier(added) {
    setPanier([...panier, added]);
    return panier;
  }
  return (
    <div className="Panier">
      <Modal show={props.show}>{console.log(items)}</Modal>
    </div>
  );
}
// onClick={() => AddPanier(products.id)}
